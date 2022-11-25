import "./Login.scss";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Login() {
  const { googleSignIn } = UserAuth();
  const navigate = useNavigate();
  const { Logout, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await Logout();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="login">
      <h1 className="login__header">Welcome! {user?.displayName}</h1>
      <div className="nav__account-btn">
        {user?.displayName ? (
          <button className="nav__login" onClick={handleSignOut}>
            Logout
          </button>
        ) : (
          <GoogleButton onClick={handleGoogleSignIn} />
        )}
      </div>
    </div>
  );
}

export default Login;

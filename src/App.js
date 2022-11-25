import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/partials/_resets.scss";
import About from "./components/about/about";
import Contact from "./components/Contact/Contact";
import Nav from "./components/nav/Nav";
import Products from "./components/products/Products";
import Footer from "./components/footer/footer";
import Login from "./components/Login/Login";
import Account from "./components/Account/Account";
import { AuthContextProvider } from "./context/AuthContext";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContextProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

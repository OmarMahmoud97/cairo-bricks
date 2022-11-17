import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/partials/_resets.scss";
import About from "./components/about/about";
import Contact from "./components/Contact/Contact";
import Nav from "./components/nav/Nav";
import Products from "./components/products/Products";
import Footer from "./components/footer/footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

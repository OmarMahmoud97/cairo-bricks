import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/about/about";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

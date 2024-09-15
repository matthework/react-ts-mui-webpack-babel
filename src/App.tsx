import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;

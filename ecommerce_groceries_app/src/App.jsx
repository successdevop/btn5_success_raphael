import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductListTwo from "./pages/ProductListTwo";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/shop" element={<ProductListTwo />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

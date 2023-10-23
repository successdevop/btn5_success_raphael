import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductListPage from "./pages/ProductListPage";
import ProductListTwo from "./pages/ProductListTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="productListOne" element={<ProductListPage />} />
        <Route path="productListTwo" element={<ProductListTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

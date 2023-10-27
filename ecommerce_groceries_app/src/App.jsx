import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="productListPage" element={<ProductListPage />} />
    </Routes>
  );
}

export default App;

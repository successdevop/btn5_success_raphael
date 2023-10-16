import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="productListPage" element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

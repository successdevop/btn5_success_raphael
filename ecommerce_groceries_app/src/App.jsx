import { BrowserRouter } from "react-router-dom";
import Header from "./components/header-section/Header";
import Main from "./components/main-section/Main";
import Footer from "./components/footer-section/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

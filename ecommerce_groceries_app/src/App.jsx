import { BrowserRouter } from "react-router-dom";
import Header from "./components/header-section/Header";
import Main from "./components/main-section/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;

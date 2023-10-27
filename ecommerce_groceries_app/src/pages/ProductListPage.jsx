import styles from "./ProductListPage.module.css";
import Footer from "../components/footer-section/Footer";
import AboutPage from "./AboutPage";
import Navbar from "../components/header-section/Navbar";

function ProductListPage() {
  return (
    <div className={styles.productListPage}>
      <Navbar isLoginPage={true} displaySecondMenu={false} />
      {/* <Product /> */}
      {/* <ProductListTwo /> */}
      <AboutPage />
      <Footer />
    </div>
  );
}

export default ProductListPage;

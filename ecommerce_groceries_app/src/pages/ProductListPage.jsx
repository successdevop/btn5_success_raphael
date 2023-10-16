import Footer from "../components/footer-section/Footer";
import Header from "../components/header-section/Header";
import Product from "./Product";
import styles from "./ProductListPage.module.css";

function ProductListPage() {
  return (
    <div className={styles.productListPage}>
      <Header />
      <Product />
      <Footer />
    </div>
  );
}

export default ProductListPage;

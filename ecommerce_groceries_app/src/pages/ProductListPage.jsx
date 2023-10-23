import Footer from "../components/footer-section/Footer";
import NavbarTwo from "../components/header-section/NavbarTwo";
// import Product from "./ProductListOne";
import styles from "./ProductListPage.module.css";
import ProductListTwo from "./ProductListTwo";

function ProductListPage() {
  return (
    <div className={styles.productListPage}>
      <NavbarTwo />
      {/* <Product /> */}
      <ProductListTwo />
      <Footer />
    </div>
  );
}

export default ProductListPage;

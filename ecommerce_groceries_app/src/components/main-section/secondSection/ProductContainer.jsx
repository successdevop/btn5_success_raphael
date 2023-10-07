import styles from "./ProductContainer.module.css";

function ProductContainer({ children }) {
  return <div className={styles.productContainer}>{children}</div>;
}

export default ProductContainer;

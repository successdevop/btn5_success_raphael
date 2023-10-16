import styles from "./ProductCardFooter.module.css";

function ProductCardFooter() {
  return (
    <div className={styles.productCardFooter}>
      <ol>
        <li>
          <span className={styles.number}>1.</span>
          <div className={styles.info}>
            <h5>Easy to use</h5>
            <p>Things on a very small that you have any direct</p>
          </div>
        </li>
        <li>
          <span className={styles.number}>2.</span>
          <div className={styles.info}>
            <h5>Easy to use</h5>
            <p>Things on a very small that you have any direct</p>
          </div>
        </li>
        <li>
          <span className={styles.number}>3.</span>
          <div className={styles.info}>
            <h5>Easy to use</h5>
            <p>Things on a very small that you have any direct</p>
          </div>
        </li>
        <li>
          <span className={styles.number}>4.</span>
          <div className={styles.info}>
            <h5>Easy to use</h5>
            <p>Things on a very small that you have any direct</p>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default ProductCardFooter;

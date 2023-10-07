import styles from "./ProductCard.module.css";

function ProductCard({ img }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImgBox}>
        <img src={img} alt="coffee cup" className={styles.productImg} />
      </div>
      <div className={styles.productInfo}>
        <h5 className={styles.infoHeader}>Graphic Design</h5>
        <a href="#" className={styles.text}>
          English Department
        </a>
        <p className={styles.price}>
          <span>$16.48</span>
          <span>$6.48</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

import styles from "./ProductCard.module.css";

function ProductCard({ img, headerText, mainText, footerText }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.cardInfo}>
          <h6 className={styles.headerText}>{headerText}</h6>
          <h2 className={styles.mainText}>{mainText}</h2>
          <h6 className={styles.footerText}>{footerText}</h6>
        </div>
        <div className={styles.cardImg}>
          <img src={img} alt={`${mainText} img`} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

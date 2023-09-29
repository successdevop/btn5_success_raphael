import styles from "./ProductCard.module.css";
import apple from "./images/apple.svg";

function ProductCard() {
  return (
    <section className={styles.productCard}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={styles.cardInfo}>
              <h6 className={styles.paragraph}>your space</h6>
              <h2>unique life</h2>
              <h6 className={styles.small}>explore items</h6>
            </div>
            <div className={styles.cardImg}>
              <img src={apple} alt="apple" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;

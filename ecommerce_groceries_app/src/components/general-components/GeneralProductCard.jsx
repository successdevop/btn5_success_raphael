import styles from "./GeneralProductCard.module.css";

function GeneralProductCard({ img, margin, children }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImgBox}>
        <img
          src={img}
          alt="coffee cup"
          className={styles.productImg}
          style={{ margin: `${margin}rem` }}
        />
      </div>
      {children}
    </div>
  );
}

export default GeneralProductCard;

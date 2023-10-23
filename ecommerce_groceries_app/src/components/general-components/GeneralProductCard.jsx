import styles from "./GeneralProductCard.module.css";

function GeneralProductCard({ img, margin, childElement1, children }) {
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
      <div>
        {children}
        {childElement1}
      </div>
    </div>
  );
}

export default GeneralProductCard;

import styles from "./GeneralProductBanner.module.css";

function GeneralProductBanner({ mainImg, otherImg, text, children }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardImgBox}>
        <img
          src={mainImg}
          alt="man on bike"
          className={styles.productCardImg}
        />
      </div>
      <div className={styles.productCardInfo}>
        {text}
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className={styles.infoImgBox}>
          <img src={otherImg} alt="meat in plate" />
        </div>
        {children}
        <div className={styles.colorBox}>
          <div className={`${styles.color} ${styles["color-1"]}`}></div>
          <div className={`${styles.color} ${styles["color-2"]}`}></div>
          <div className={`${styles.color} ${styles["color-3"]}`}></div>
          <div className={`${styles.color} ${styles["color-4"]}`}></div>
        </div>
      </div>
    </div>
  );
}

export default GeneralProductBanner;

import styles from "./GeneralProductBanner.module.css";

function GeneralProductBanner({
  mainImg,
  otherImg,
  childElement1,
  childElement2,
  children,
}) {
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
        {childElement1}
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className={styles.infoImgBox}>
          <img src={otherImg} alt="meat in plate" />
        </div>
        {children}
        {childElement2}
      </div>
    </div>
  );
}

export default GeneralProductBanner;

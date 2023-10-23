import styles from "./GlobalColorsBox.module.css";

function GlobalColorsBox() {
  return (
    <div className={styles.colorBox}>
      <div className={`${styles.color} ${styles["color-1"]}`}></div>
      <div className={`${styles.color} ${styles["color-2"]}`}></div>
      <div className={`${styles.color} ${styles["color-3"]}`}></div>
      <div className={`${styles.color} ${styles["color-4"]}`}></div>
    </div>
  );
}

export default GlobalColorsBox;

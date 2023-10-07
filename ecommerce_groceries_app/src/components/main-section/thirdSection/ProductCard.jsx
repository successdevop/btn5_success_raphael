import styles from "./ProductCard.module.css";
import manOnBike from "../../../assets/images/manOnBike.svg";
import meatInPlate from "../../../assets/images/meatInPlate.svg";
import GeneralInfoCard from "../../general-components/GeneralInfoCard";

function ProductCard() {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardImgBox}>
        <img
          src={manOnBike}
          alt="man on bike"
          className={styles.productCardImg}
        />
      </div>
      <div className={styles.productCardInfo}>
        <h5>MOST POPULAR</h5>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className={styles.infoImgBox}>
          <img src={meatInPlate} alt="meat in plate" />
        </div>
        <GeneralInfoCard
          headerText="English Department"
          headerFontSize={1.4}
          mainText="&#10515; 15 Sales"
          textFontSize={1.3}
          alignItems="center"
        />
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

export default ProductCard;

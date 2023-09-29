import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <div className={styles.hero}>
      <span className={`${styles["directionIcon"]} ${styles["prev"]}`}>
        <FiChevronLeft />
      </span>
      <span className={`${styles["directionIcon"]} ${styles["next"]}`}>
        <FiChevronRight />
      </span>
      <div className={styles.carouselContentInfo}>
        <h1 className={styles.headline}>GROCERIES DELIVERY</h1>
        <h4>
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className={styles.cta}>Start Now</button>
      </div>
    </div>
  );
}

export default Carousel;

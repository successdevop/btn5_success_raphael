import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import styles from "./Carousel.module.css";
import GlobalButton from "../general-components/GlobalButton";

function Carousel() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.innerCarousel}>
        <span className={`${styles.carouselBtnPrev} ${styles.prev}`}>
          <FiChevronLeft />
        </span>
        <span className={`${styles.carouselBtnNext} ${styles.next}`}>
          <FiChevronRight />
        </span>
        <div className={styles.carouselContentInfo}>
          <h1 className={styles.headline}>GROCERIES DELIVERY</h1>
          <h4 className={styles.mobileText}>
            We know how large objects will act, but things on a small scale.
          </h4>
          <h4 className={styles.desktopText}>
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h4>
          <GlobalButton text="Start Now" />
        </div>
        <div className={styles.carouselProductSlide}>
          <div className={`${styles.prevSlide} ${styles.activeSlide}`}></div>
          <div className={styles.nextSlide}></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

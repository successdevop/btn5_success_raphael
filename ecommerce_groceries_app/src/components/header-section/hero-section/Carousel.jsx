import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <div className={styles.hero}>
      <div className={styles.carouselContentInfo}>
        <h1 className={styles.headline}>GROCERIES DELIVERY</h1>
        <h4>
          We know how large objects will act, but things on a small scale.
        </h4>
      </div>
    </div>
  );
}

export default Carousel;

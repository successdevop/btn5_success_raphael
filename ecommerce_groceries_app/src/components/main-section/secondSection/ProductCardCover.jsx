import styles from "./ProductCardCover.module.css";
import rootAndGrainImg from "../../../assets/images/rootsAndGrain.svg";

function ProductCardCover() {
  return (
    <div className={styles.cardCover}>
      <img
        src={rootAndGrainImg}
        alt="rootAndGrainImg"
        className={styles.cardCoverImg}
      />
      <div className={styles.cardCoverInfo}>
        <h6>FURNITURE</h6>
        <h6>5 Items</h6>
      </div>
    </div>
  );
}

export default ProductCardCover;

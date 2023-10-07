import styles from "./GeneralProductCardCoverImg.module.css";

function GeneralProductCardCoverImg({ img }) {
  return (
    <div className={styles.cardCover}>
      <img src={img} alt="rootAndGrainImg" className={styles.cardCoverImg} />
      <div className={styles.cardCoverInfo}>
        <h6>FURNITURE</h6>
        <h6>5 Items</h6>
      </div>
    </div>
  );
}

export default GeneralProductCardCoverImg;

import GeneralInfoCard from "../../general-components/GeneralInfoCard";
import styles from "./ProductCard.module.css";

function ProductCard({ img }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImgBox}>
        <img src={img} alt="coffee cup" className={styles.productImg} />
      </div>
      <GeneralInfoCard />
    </div>
  );
}

export default ProductCard;

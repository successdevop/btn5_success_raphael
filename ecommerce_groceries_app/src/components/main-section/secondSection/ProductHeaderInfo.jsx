import styles from "./ProductHeaderInfo.module.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import SectionTitle from "./SectionTitle";

function ProductHeaderInfo() {
  return (
    <div className={styles.productHeaderInfoContainer}>
      <SectionTitle />
      <div className={styles.productHeaderInfo}>
        <ul className={styles.genderBox}>
          <li>
            <h6 className={styles.active}>Men</h6>
          </li>
          <li>
            <h6>Women</h6>
          </li>
          <li>
            <h6>Accessories</h6>
          </li>
        </ul>
        <ul className={styles.genderBoxBtn}>
          <li>
            <CiCircleChevLeft />
          </li>
          <li>
            <CiCircleChevRight />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductHeaderInfo;

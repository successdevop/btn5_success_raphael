import bgImgBuilding from "../../../assets/featuredImg/bgImgBuilding.svg";

import { GiAlarmClock } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import { AiOutlineRight } from "react-icons/ai";
import styles from "./ProductInfoCard.module.css";

function ProductInfoCard({ img }) {
  return (
    <div className={styles.productInfoCard}>
      <span className={styles.tag}>new</span>
      <div className={styles.productImgBox}>
        <img
          src={img}
          alt={`${img}`.substring(15)}
          className={styles.productImg}
        />
      </div>
      <div className={styles.productInfoBox}>
        <div className={styles.productControlBtnBox}>
          <button className={styles.productBtn}>Google</button>
          <button className={styles.productBtn}>Trending</button>
          <button className={styles.productBtn}>New</button>
        </div>
        <h4 className={styles.textHeader}>
          Loudest à la Madison #1 (L'integral)
        </h4>
        <p className={styles.text}>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className={styles.dateAndComments}>
          <p>
            <GiAlarmClock className={styles.iconClock} />
            <span>22 April 2021</span>
          </p>
          <p>
            <VscGraph className={styles.iconGraph} />
            <span>10 comments</span>
          </p>
        </div>
        <div className={styles.learnMore}>
          <h6>Learn More</h6>
          <AiOutlineRight className={styles.iconArrow} />
        </div>
      </div>
    </div>
  );
}

export default ProductInfoCard;

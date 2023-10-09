import styles from "./FooterBottomContent.module.css";
import SocialMediaIcons from "./SocialMediaIcons";

function FooterBottonContent() {
  return (
    <div className={styles.footerBottonContent}>
      <h6 className={styles.text}>
        Made With Love By Finland All Right Reserved{" "}
      </h6>
      <SocialMediaIcons />
    </div>
  );
}

export default FooterBottonContent;

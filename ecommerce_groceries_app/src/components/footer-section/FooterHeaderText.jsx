import GlobalButton from "../general-components/GlobalButton";
import styles from "./FooterHeaderText.module.css";

function FooterHeaderText() {
  return (
    <div className={styles.footerHeaderText}>
      <div className={styles.textBox}>
        <h3>Consulting Agency For Your Business</h3>
        <p>the quick fox jumps over the lazy dog</p>
      </div>
      <GlobalButton text="Contact Us" />
    </div>
  );
}

export default FooterHeaderText;

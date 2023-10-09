import styles from "./SectionHeaderText.module.css";

function SectionHeaderText({
  otherText = "Practice Advice",
  mainText = "Featured Products",
}) {
  return (
    <div className={styles.sectionHeaderText}>
      <h6>{otherText}</h6>
      <h2>{mainText}</h2>
    </div>
  );
}

export default SectionHeaderText;

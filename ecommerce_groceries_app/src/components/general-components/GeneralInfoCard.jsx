import styles from "./GeneralInfoCard.module.css";

function GeneralInfoCard({
  headerText = "Graphic Design",
  mainText = "English Department",
  firstPrice = `$${16.48}`,
  secondPrice = `$${6.48}`,
  headerFontSize,
  textFontSize,
  priceFontSize,
  alignItems = "",
}) {
  return (
    <div className={styles.productInfo} style={{ alignItems: `${alignItems}` }}>
      <h5
        style={{ fontSize: `${headerFontSize}rem` }}
        className={styles.infoHeader}
      >
        {headerText}
      </h5>
      <a
        href="#"
        className={styles.text}
        style={{ fontSize: `${textFontSize}rem` }}
      >
        {mainText}
      </a>
      <p className={styles.price} style={{ fontSize: `${priceFontSize}rem` }}>
        <span>{firstPrice}</span>
        <span>{secondPrice}</span>
      </p>
    </div>
  );
}

export default GeneralInfoCard;

import styles from "./GeneralProductCardCoverImg.module.css";

function GeneralProductCardCoverImg({
  textAlign = "",
  paddingTop = 4.8,
  paddingRight = 0,
  paddingBottom = 4.8,
  paddingLeft = 0,
  positionTop = 0,
  positionRight = 0,
  positionBottom = 0,
  positionLeft = 0,
  imgHeight = 66.4,
  titleText = "FURNITURE",
  valueText = "5 Items",
  titleTextColor = "#252b42",
  valueTextColor = "#737373",
  img,
}) {
  const cardCoverStyle = {
    padding: `${paddingTop}rem ${paddingRight}rem ${paddingBottom}rem ${paddingLeft}rem`,
  };

  const cardCoverImgStyle = {
    height: `${imgHeight}rem`,
  };

  const cardCoverInfoStyle = {
    textAlign: textAlign,
    position: "absolute",
    top: `${positionTop}%`,
    right: `${positionRight}%`,
    bottom: `${positionBottom}%`,
    left: `${positionLeft}%`,
    zIndex: 2,
  };

  const titleTextStyle = {
    color: titleTextColor,
  };

  const valueTextStyle = {
    color: valueTextColor,
  };

  return (
    <div className={styles.cardCover} style={cardCoverStyle}>
      <div className={styles.cardCoverImgBox}>
        <img
          src={img}
          alt="rootAndGrainImg"
          className={styles.cardCoverImg}
          style={cardCoverImgStyle}
        />
      </div>

      <div className={styles.cardCoverInfo} style={cardCoverInfoStyle}>
        <h6 style={titleTextStyle}>{titleText}</h6>
        <h6 style={valueTextStyle}>{valueText}</h6>
      </div>
    </div>
  );
}

export default GeneralProductCardCoverImg;

import styles from "./GlobalButton.module.css";

function GlobalButton({
  text = "Contact Us",
  textAlign = "",
  fontSize = 1.4,
  lineHeight = 2.2,
  letterSpacing = 0.2,
  paddingTop = 1.2,
  paddingRight = 2.4,
  paddingBottom = 1.2,
  paddingLeft = 2.4,
}) {
  const globalButtonStyle = {
    textAlign: textAlign,
    fontSize: `${fontSize}rem`,
    lineHeight: `${lineHeight}rem`,
    letterSpacing: `${letterSpacing}rem`,
    padding: `${paddingTop}rem ${paddingRight}rem ${paddingBottom}rem ${paddingLeft}rem`,
  };

  return (
    <button style={globalButtonStyle} className={styles.globalButton}>
      {text}
    </button>
  );
}

export default GlobalButton;

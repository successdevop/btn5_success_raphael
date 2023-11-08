import PropTypes from "prop-types";

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
  bgColor = "#23a6f0",
}) {
  const globalButtonStyle = {
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Montserrat",
    backgroundColor: bgColor,
    textAlign: textAlign,
    fontSize: `${fontSize}rem`,
    lineHeight: `${lineHeight}rem`,
    letterSpacing: `${letterSpacing}rem`,
    padding: `${paddingTop}rem ${paddingRight}rem ${paddingBottom}rem ${paddingLeft}rem`,
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
  };

  return <button style={globalButtonStyle}>{text}</button>;
}

GlobalButton.propTypes = {
  text: PropTypes.string,
  textAlign: PropTypes.string,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  letterSpacing: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  bgColor: PropTypes.string,
};
export default GlobalButton;

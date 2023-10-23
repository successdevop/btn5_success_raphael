function MainHeaderText({
  textAlign = "center",
  text = "BESTSELLER PRODUCTS",
  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,
}) {
  const headerStyle = {
    textAlign: textAlign,
    fontSize: `1.6rem`,
    fontWeight: 700,
    lineHeight: `3rem`,
    letterSpacing: `.1rem`,
    padding: `${paddingTop}rem ${paddingRight}rem ${paddingBottom}rem ${paddingLeft}rem`,
  };

  return (
    <div style={headerStyle}>
      <h3>{text}</h3>
    </div>
  );
}

export default MainHeaderText;

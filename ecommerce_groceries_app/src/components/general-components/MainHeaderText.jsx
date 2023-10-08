function MainHeaderText({
  textAlign = "center",
  text = "BESTSELLER PRODUCTS",
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
}) {
  const headerStyle = {
    textAlign: textAlign,
    fontSize: `1.6rem`,
    fontWeight: 700,
    lineHeight: `3rem`,
    letterSpacing: `.1rem`,
    padding: `${top}rem ${right}rem ${bottom}rem ${left}rem`,
  };

  return (
    <div style={headerStyle}>
      <h3>{text}</h3>
    </div>
  );
}

export default MainHeaderText;

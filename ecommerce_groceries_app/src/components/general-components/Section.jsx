function Section({ bgColor = "#fff", children }) {
  const sectionStyles = {
    backgroundColor: bgColor,
  };
  return <section style={sectionStyles}>{children}</section>;
}

export default Section;

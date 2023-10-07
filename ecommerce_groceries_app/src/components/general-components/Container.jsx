function Container({ bgColor = "#fff", maxWidth = 120, children, className }) {
  const containerStyles = {
    maxWidth: `${maxWidth}rem`,
    backgroundColor: bgColor,
  };

  return (
    <div className={className ?? ""} style={containerStyles}>
      {children}
    </div>
  );
}

export default Container;

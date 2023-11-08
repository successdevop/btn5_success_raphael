import PropTypes from "prop-types";

function Section({ bgColor = "#fff", children, className }) {
  const sectionStyles = {
    backgroundColor: bgColor,
  };
  return (
    <section className={className ?? ""} style={sectionStyles}>
      {children}
    </section>
  );
}

export default Section;

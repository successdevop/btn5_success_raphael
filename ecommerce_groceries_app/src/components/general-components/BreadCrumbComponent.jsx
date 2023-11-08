import { Link } from "react-router-dom";
import styles from "./BreadCrumbComponent.module.css";
import Container from "./Container";
import { IconRightPointer } from "../../UtilityIcons/IconFile";
import PropTypes from "prop-types";

function BreadCrumbComponent({
  mainText,
  subText = "Shop",
  bgColor = "#FAFAFA",
}) {
  return (
    <Container
      bgColor={`${bgColor}`}
      display="grid"
      gap={4}
      paddingBottom={4}
      paddingLeft={4.8}
      paddingRight={4.8}
      className={styles.breadCrumbComponent}
    >
      {mainText && <h3>{mainText}</h3>}
      <div className={styles.breadCrumbComponentInnerBox}>
        <Link to="">Home</Link>
        <IconRightPointer className={styles.breadCrumbComponentIcon} />
        <h6>{subText}</h6>
      </div>
    </Container>
  );
}

BreadCrumbComponent.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  bgColor: PropTypes.string,
};
export default BreadCrumbComponent;

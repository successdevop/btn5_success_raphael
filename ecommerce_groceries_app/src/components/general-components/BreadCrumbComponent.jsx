import { Link } from "react-router-dom";
import styles from "./BreadCrumbComponent.module.css";
import Container from "./Container";
import { IconRightPointer } from "../../UtilityIcons/IconFile";

function BreadCrumbComponent() {
  return (
    <Container
      bgColor="#FAFAFA"
      display="grid"
      gap={4}
      paddingBottom={4}
      paddingLeft={4.8}
      paddingRight={4.8}
      className={styles.breadCrumbComponent}
    >
      <h3>Shop</h3>
      <div className={styles.breadCrumbComponentInnerBox}>
        <Link to="">Home</Link>
        <IconRightPointer className={styles.breadCrumbComponentIcon} />
        <h6>Shop</h6>
      </div>
    </Container>
  );
}

export default BreadCrumbComponent;

import { brandLogoImgData } from "../../data/appDataFile";
import styles from "./BrandLogoImg.module.css";
import PropTypes from "prop-types";

function BrandLogoImg({
  bgColor = "#FAFAFA",
  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,
}) {
  const logoStyles = {
    backgroundColor: bgColor,
    padding: `${paddingTop}rem ${paddingRight}rem ${paddingBottom}rem ${paddingLeft}rem`,
  };
  return (
    <div style={logoStyles}>
      <div className={styles.brandLogoImgBox}>
        {brandLogoImgData.map((logo) => (
          <img
            key={logo.id}
            className={styles.logoImage}
            src={logo.img}
            alt={`${logo.img}`.substring(15)}
          />
        ))}
      </div>
    </div>
  );
}

BrandLogoImg.propTypes = {
  bgColor: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
};
export default BrandLogoImg;

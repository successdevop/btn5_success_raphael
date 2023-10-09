import styles from "./LogoImage.module.css";

function LogoImage({ img }) {
  return (
    <img className={styles.logoImage} src={img} alt={`${img}`.substring(15)} />
  );
}

export default LogoImage;

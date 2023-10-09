const logoImageStyles = {
  width: `14.9rem`,
  height: `auto`,
};
function LogoImage({ img }) {
  return <img style={logoImageStyles} src={img} alt={`${img}`.substring(15)} />;
}

export default LogoImage;

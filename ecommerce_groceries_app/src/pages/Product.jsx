import { Link } from "react-router-dom";
import Container from "../components/general-components/Container";
import Section from "../components/general-components/Section";
import styles from "./Product.module.css";
import { IconBars, IconRightPointer } from "../UtilityIcons/IconFile";
import {
  productImages,
  productPageHeaderImages,
  seventhSectionData,
} from "../data/appDataFile";
import GeneralProductCardCoverImg from "../components/general-components/GeneralProductCardCoverImg";
import { IconViewBox } from "../UtilityIcons/IconFile";
import GlobalButton from "../components/general-components/GlobalButton";
import GeneralProductCard from "../components/general-components/GeneralProductCard";
import GeneralInfoCard from "../components/general-components/GeneralInfoCard";
import LogoImage from "../components/general-components/LogoImage";

function Product() {
  return (
    <>
      {/* first section */}
      <Section bgColor="#FAFAFA">
        <Container
          bgColor="#FAFAFA"
          paddingTop={5}
          paddingBottom={5}
          className={styles.firstSection}
        >
          <Container
            bgColor="#FAFAFA"
            display="grid"
            gap={3}
            className={styles.firstHeaderSection}
          >
            <h3>Shop</h3>
            <div className={styles.firstSectionInnerBox}>
              <Link to="">Home</Link>
              <IconRightPointer className={styles.firstSectionIcon} />
              <h6>Shop</h6>
            </div>
          </Container>
          <Container bgColor="#FAFAFA">
            {productPageHeaderImages.map((item, i) => {
              return <GeneralProductCardCoverImg key={i} {...item} />;
            })}
          </Container>
        </Container>
      </Section>

      {/* second section */}
      <Section>
        <Container className={styles.secondSection}>
          <Container>
            <div className={styles.secondSectionHeaderBox}>
              <h6>Showing all 12 results</h6>
              <div className={styles.secondSectionViewBox}>
                <h6>Views:</h6>
                <button>
                  <IconViewBox />
                </button>
                <button>
                  <IconBars />
                </button>
              </div>
              <div className={styles.secondSectionSelectBox}>
                <select name="" id="">
                  <option value="">Popularity</option>
                </select>
                <GlobalButton
                  paddingTop={0.6}
                  paddingBottom={0.6}
                  paddingLeft={0.9}
                  paddingRight={0.9}
                  text="Filter"
                />
              </div>
            </div>
          </Container>
          <Container>
            {productImages.map((item) => (
              <GeneralProductCard margin={0} key={item.id} {...item}>
                <GeneralInfoCard />
              </GeneralProductCard>
            ))}
          </Container>

          <Container
            display="flex"
            justifyContent="center"
            className={styles.secondSectionControlBtnBox}
          >
            <button>First</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </Container>
        </Container>
      </Section>

      {/* third section */}
      <Section>
        <Container
          display="grid"
          gap={4}
          paddingBottom={10}
          className="removeMarginFromContainer threeColumnGridLayout"
        >
          {seventhSectionData.map((logo) => (
            <LogoImage key={logo.id} {...logo} />
          ))}
        </Container>
      </Section>
    </>
  );
}

export default Product;

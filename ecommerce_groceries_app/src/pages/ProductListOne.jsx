import Container from "../components/general-components/Container";
import Section from "../components/general-components/Section";
import styles from "./Product.module.css";
import { IconBars } from "../UtilityIcons/IconFile";
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
import GlobalColorsBox from "../components/general-components/GlobalColorsBox";
import BreadCrumbComponent from "../components/general-components/BreadCrumbComponent";

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
          <BreadCrumbComponent />
          <Container
            bgColor="#FAFAFA"
            display="grid"
            gap={2}
            paddingLeft={4}
            paddingRight={4}
            className={styles.firstSectionProductCardContainer}
          >
            {productPageHeaderImages.map((item, i) => {
              return (
                <GeneralProductCardCoverImg
                  textAlign="center"
                  titleTextColor="#fff"
                  valueTextColor="#fff"
                  positionTop={40}
                  positionLeft={8}
                  paddingTop={0}
                  paddingBottom={0}
                  imgHeight={""}
                  key={i}
                  {...item}
                />
              );
            })}
          </Container>
        </Container>
      </Section>

      {/* second section */}
      <Section>
        <Container className={styles.secondSection} paddingBottom={10}>
          <Container paddingTop={5} paddingBottom={5}>
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
          <Container
            display="grid"
            gap={5}
            className={styles.secondSectionProductCardContainer}
          >
            {productImages.map((item) => (
              <GeneralProductCard
                childElement1={<GlobalColorsBox />}
                margin={0}
                key={item.id}
                {...item}
              >
                <GeneralInfoCard />
              </GeneralProductCard>
            ))}
          </Container>

          <aside>
            <Container
              display="flex"
              className={styles.secondSectionControlBtnBox}
            >
              <button>First</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>Next</button>
            </Container>
          </aside>
        </Container>
      </Section>

      {/* third section */}
      <Section>
        <Container
          bgColor="#FAFAFA"
          display="grid"
          justifyItems="center"
          alignItems="center"
          gap={10}
          paddingBottom={10}
          paddingTop={10}
          className="logoColumnGridLayout"
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

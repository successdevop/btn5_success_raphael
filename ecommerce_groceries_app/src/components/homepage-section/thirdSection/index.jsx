import Container from "../../general-components/Container";
import Section from "../../general-components/Section";
import ProductCardFooter from "./ProductCardFooter";

import GeneralProductBanner from "../../general-components/GeneralProductBanner";
import GeneralInfoCard from "../../general-components/GeneralInfoCard";

import manOnBike from "../../../assets/images/manOnBike.svg";
import meatInPlate from "../../../assets/images/meatInPlate.svg";
import MainHeaderText from "../../general-components/MainHeaderText";
import GlobalColorsBox from "../../general-components/GlobalColorsBox";

function index() {
  return (
    <Section>
      <Container paddingBottom={6}>
        <Container paddingBottom={3}>
          <GeneralProductBanner
            mainImg={manOnBike}
            otherImg={meatInPlate}
            childElement1={<MainHeaderText text="MOST POPULAR" />}
            childElement2={<GlobalColorsBox />}
          >
            <GeneralInfoCard
              headerText="English Department"
              headerFontSize={1.4}
              mainText="&#10515; 15 Sales"
              textFontSize={1.3}
              alignItems="center"
            />
          </GeneralProductBanner>
        </Container>

        <ProductCardFooter />
      </Container>
    </Section>
  );
}

export default index;

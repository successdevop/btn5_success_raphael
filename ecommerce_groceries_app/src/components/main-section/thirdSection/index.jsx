import Container from "../../general-components/Container";
import Section from "../../general-components/Section";
import ProductCardFooter from "./ProductCardFooter";

import GeneralProductBanner from "../../general-components/GeneralProductBanner";
import GeneralInfoCard from "../../general-components/GeneralInfoCard";

import manOnBike from "../../../assets/images/manOnBike.svg";
import meatInPlate from "../../../assets/images/meatInPlate.svg";

function index() {
  return (
    <Section>
      <Container className={"thirdSection"}>
        <GeneralProductBanner mainImg={manOnBike} otherImg={meatInPlate}>
          <GeneralInfoCard
            headerText="English Department"
            headerFontSize={1.4}
            mainText="&#10515; 15 Sales"
            textFontSize={1.3}
            alignItems="center"
          />
        </GeneralProductBanner>

        <ProductCardFooter />
      </Container>
    </Section>
  );
}

export default index;
import Container from "../../general-components/Container";
import GeneralInfoCard from "../../general-components/GeneralInfoCard";
import GeneralProductBanner from "../../general-components/GeneralProductBanner";
import Section from "../../general-components/Section";

import aGirlWithDoughtnut from "../../../assets/images/aGirlWithDoughtnut.svg";
import caramelCashew from "../../../assets/images/caramelCashew.svg";
import MainHeaderText from "../../general-components/MainHeaderText";
import GlobalColorsBox from "../../general-components/GlobalColorsBox";

function index() {
  return (
    <Section>
      <Container paddingBottom={3}>
        <GeneralProductBanner
          mainImg={aGirlWithDoughtnut}
          otherImg={caramelCashew}
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
    </Section>
  );
}

export default index;

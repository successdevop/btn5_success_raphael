import Container from "../../general-components/Container";
import GeneralInfoCard from "../../general-components/GeneralInfoCard";
import GeneralProductBanner from "../../general-components/GeneralProductBanner";
import Section from "../../general-components/Section";

import aGirlWithDoughtnut from "../../../assets/images/aGirlWithDoughtnut.svg";
import caramelCashew from "../../../assets/images/caramelCashew.svg";

function index() {
  return (
    <Section>
      <Container className={"thirdSection"}>
        <GeneralProductBanner
          mainImg={aGirlWithDoughtnut}
          otherImg={caramelCashew}
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

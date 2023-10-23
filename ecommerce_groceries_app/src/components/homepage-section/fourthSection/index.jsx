import { secondSectionData } from "../../../data/appDataFile";
import Container from "../../general-components/Container";
import GeneralInfoCard from "../../general-components/GeneralInfoCard";
import GeneralProductCard from "../../general-components/GeneralProductCard";
import ProductHeaderNav from "../../general-components/ProductHeaderNav";
import Section from "../../general-components/Section";

import GeneralProductCardCoverImg from "../../general-components/GeneralProductCardCoverImg";
import doughnutImg from "../../../assets/images/doughnutImg.svg";
import MainHeaderText from "../../general-components/MainHeaderText";

function index() {
  return (
    <Section>
      <Container
        display="grid"
        paddingLeft={2}
        paddingRight={2}
        paddingBottom={5}
        className="customStyleForFourthSection"
      >
        <GeneralProductCardCoverImg
          positionTop={10}
          positionLeft={10}
          img={doughnutImg}
        />
        <Container display="grid" gap={4} className="removeMarginFromContainer">
          <ProductHeaderNav>
            <MainHeaderText />
          </ProductHeaderNav>
          <Container
            display="grid"
            gap={4}
            paddingBottom={10}
            className="threeColumnGridLayout"
          >
            {secondSectionData.map((item) => (
              <GeneralProductCard key={item.id} {...item}>
                <GeneralInfoCard />
              </GeneralProductCard>
            ))}
          </Container>
        </Container>
      </Container>
    </Section>
  );
}

export default index;

import Section from "../../general-components/Section";
import Container from "../../general-components/Container";

import ProductHeaderNav from "../../general-components/ProductHeaderNav";
import GeneralInfoCard from "../../general-components/GeneralInfoCard";
import GeneralProductCard from "../../general-components/GeneralProductCard";
import GeneralProductCardCoverImg from "../../general-components/GeneralProductCardCoverImg";

import { secondSectionData } from "../../../data/app";

import rootsAndGrain from "../../../assets/images/rootsAndGrain.svg";
import MainHeaderText from "../../general-components/MainHeaderText";

function index() {
  return (
    <Section>
      <Container
        display="grid"
        paddingTop={2}
        paddingLeft={2}
        paddingRight={2}
        paddingBottom={8}
        className="customStyleForSecondSection"
      >
        <GeneralProductCardCoverImg img={rootsAndGrain} />
        <Container display="grid" gap={4} className="removeMarginFromContainer">
          <ProductHeaderNav>
            <MainHeaderText />
          </ProductHeaderNav>
          <Container
            display="grid"
            gap={4}
            paddingBottom={10}
            className="removeMarginFromContainer threeColumnGridLayout"
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

import { secondSectionData } from "../../../data/app";
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
        justifyItems="center"
        paddingLeft={2}
        paddingRight={2}
        paddingBottom={5}
      >
        <GeneralProductCardCoverImg img={doughnutImg} />
        <Container display="grid" gap={4}>
          <ProductHeaderNav>
            <MainHeaderText />
          </ProductHeaderNav>
          <Container display="grid" gap={4} paddingBottom={10}>
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

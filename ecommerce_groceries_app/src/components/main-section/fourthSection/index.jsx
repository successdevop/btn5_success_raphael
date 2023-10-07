import { secondSectionData } from "../../../data/app";
import Container from "../../general-components/Container";
import GeneralInfoCard from "../../general-components/GeneralInfoCard";
import GeneralProductCard from "../../general-components/GeneralProductCard";
import ProductHeaderNav from "../../general-components/ProductHeaderNav";
import Section from "../../general-components/Section";

import GeneralProductCardCoverImg from "../../general-components/GeneralProductCardCoverImg";
import doughnutImg from "../../../assets/images/doughnutImg.svg";

function index() {
  return (
    <Section>
      <Container className="fourthSection">
        <GeneralProductCardCoverImg img={doughnutImg} />
        <Container className="productContainer">
          <ProductHeaderNav />
          <Container className="secondSectionCardContainer">
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

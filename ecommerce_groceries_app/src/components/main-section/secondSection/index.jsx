import Section from "../../general-components/Section";
import Container from "../../general-components/Container";
import ProductCardCover from "./ProductCardCover";
import ProductContainer from "./ProductContainer";
import ProductHeaderInfo from "./ProductHeaderInfo";
import ProductCard from "./ProductCard";

import { secondSectionData } from "../../../data/app";

function index() {
  return (
    <Section>
      <Container className="secondSection">
        <ProductCardCover />
        <ProductContainer>
          <ProductHeaderInfo />
          <Container className="secondSectionCardContainer">
            {secondSectionData.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
            {secondSectionData.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </Container>
        </ProductContainer>
      </Container>
    </Section>
  );
}

export default index;

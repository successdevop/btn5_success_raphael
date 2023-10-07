import Container from "../../general-components/Container";
import Section from "../../general-components/Section";
import ProductCard from "./ProductCard";
import ProductCardFooter from "./ProductCardFooter";

function index() {
  return (
    <Section>
      <Container className={"thirdSection"}>
        <ProductCard />
        <ProductCardFooter />
      </Container>
    </Section>
  );
}

export default index;

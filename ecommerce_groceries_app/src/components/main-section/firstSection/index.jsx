import Container from "../../general-components/Container";
import Section from "../../general-components/Section";
import ProductCard from "./ProductCard";

import { firstSectionData } from "../../../data/app";

function index() {
  return (
    <Section bgColor="#FAFAFA">
      <Container
        paddingTopBottom={4}
        paddingLeftRight={2}
        bgColor="#FAFAFA"
        className="firstSection"
      >
        {firstSectionData.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </Container>
    </Section>
  );
}

export default index;

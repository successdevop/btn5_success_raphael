import Container from "../../general-components/Container";
import Section from "../../general-components/Section";
import ProductCard from "./ProductCard";

import { firstSectionData } from "../../../data/app";

function index() {
  return (
    <Section bgColor="#FAFAFA">
      <Container
        bgColor="#FAFAFA"
        paddingTop={6}
        paddingBottom={7}
        display="grid"
        alignItems="center"
        justifyItems="center"
        gap={3}
      >
        {firstSectionData.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </Container>
    </Section>
  );
}

export default index;

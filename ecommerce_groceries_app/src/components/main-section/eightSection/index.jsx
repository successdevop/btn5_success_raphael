import Container from "../../general-components/Container";
import Section from "../../general-components/Section";
import ProductInfoCard from "./ProductInfoCard";
import SectionHeaderText from "./SectionHeaderText";

import { eightSectionData } from "../../../data/app";

function index() {
  return (
    <Section>
      <Container
        paddingTop={8}
        paddingBottom={8}
        paddingLeft={1.5}
        paddingRight={1.5}
      >
        <SectionHeaderText />
        <Container
          display="grid"
          gap={4}
          className="twoColumnGridLayout threeColumnGridLayout"
        >
          {eightSectionData.map((item) => (
            <ProductInfoCard key={item.id} {...item} />
          ))}
        </Container>
      </Container>
    </Section>
  );
}

export default index;

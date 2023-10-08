import Container from "../../general-components/Container";
import Section from "../../general-components/Section";

import { seventhSectionData } from "../../../data/app";
import LogoImage from "./LogoImage";

function index() {
  return (
    <Section bgColor="#FAFAFA">
      <Container bgColor="#FAFAFA" className="seventhSection">
        {seventhSectionData.map((logo) => (
          <LogoImage key={logo.id} {...logo} />
        ))}
      </Container>
    </Section>
  );
}
export default index;

import Container from "../../general-components/Container";
import Section from "../../general-components/Section";

import { seventhSectionData } from "../../../data/appDataFile";
import LogoImage from "../../general-components/LogoImage";

function index() {
  return (
    <Section bgColor="#FAFAFA">
      <Container
        bgColor="#FAFAFA"
        display="grid"
        gap={10}
        justifyItems="center"
        alignItems="center"
        paddingBottom={15}
        paddingLeft={3}
        paddingRight={3}
        className="logoColumnGridLayout"
      >
        {seventhSectionData.map((logo) => (
          <LogoImage key={logo.id} {...logo} />
        ))}
      </Container>
    </Section>
  );
}
export default index;

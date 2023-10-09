import Container from "../general-components/Container";
import Section from "../general-components/Section";
import FooterHeaderText from "./FooterHeaderText";
import { footerData } from "../../data/app";
import FooterListItem from "./FooterListItem";
import FooterBottonContent from "./FooterBottomContent";

function index() {
  return (
    <Section>
      <Container
        bgColor="#252B42"
        display="grid"
        gap={5}
        justifyItems="center"
        alignItems="center"
        paddingTop={5}
        paddingBottom={2}
      >
        <Container bgColor="" display="grid" gap={7}>
          <FooterHeaderText />
          <Container bgColor="" display="grid" gap={5} justifyItems="start">
            {footerData.map((items) => (
              <FooterListItem key={items.id} {...items} />
            ))}
          </Container>
        </Container>
        <FooterBottonContent />
      </Container>
    </Section>
  );
}

export default index;

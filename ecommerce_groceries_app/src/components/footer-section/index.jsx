import Container from "../general-components/Container";
import Section from "../general-components/Section";
import FooterHeaderText from "./FooterHeaderText";
import { footerData } from "../../data/appDataFile";
import FooterListItem from "./FooterListItem";
import FooterBottonContent from "./FooterBottomContent";

function index() {
  return (
    <Section>
      <Container
        bgColor="#252B42"
        display="grid"
        gap={5}
        paddingTop={5}
        paddingLeft={6}
        paddingRight={5}
        paddingBottom={5}
      >
        <FooterHeaderText />
        <Container
          bgColor=""
          className="removeMarginFromContainer customStyleForFooterSection"
          display="grid"
          gap={5}
        >
          {footerData.map((items) => (
            <FooterListItem key={items.id} {...items} />
          ))}
        </Container>

        <FooterBottonContent />
      </Container>
    </Section>
  );
}

export default index;

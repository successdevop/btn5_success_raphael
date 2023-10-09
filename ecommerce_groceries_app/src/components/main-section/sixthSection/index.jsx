import { sixthSectionData } from "../../../data/app";
import Container from "../../general-components/Container";
import GeneralInfoCard from "../../general-components/GeneralInfoCard";
import GeneralProductCard from "../../general-components/GeneralProductCard";
import MainHeaderText from "../../general-components/MainHeaderText";
import Section from "../../general-components/Section";

function index() {
  return (
    <Section bgColor="#FAFAFA">
      <MainHeaderText top={5} />
      <Container
        bgColor="#FAFAFA"
        display="grid"
        justifyItems="center"
        gap={5}
        paddingTop={5}
        paddingBottom={10}
      >
        {sixthSectionData.map((item) => (
          <GeneralProductCard margin={0} key={item.id} {...item}>
            <GeneralInfoCard />
          </GeneralProductCard>
        ))}
      </Container>
    </Section>
  );
}

export default index;
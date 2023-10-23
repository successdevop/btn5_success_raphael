import { sixthSectionData } from "../../../data/appDataFile";
import Container from "../../general-components/Container";
import GeneralInfoCard from "../../general-components/GeneralInfoCard";
import GeneralProductCard from "../../general-components/GeneralProductCard";
import MainHeaderText from "../../general-components/MainHeaderText";
import Section from "../../general-components/Section";

function index() {
  return (
    <Section bgColor="#FAFAFA">
      <MainHeaderText paddingTop={5} />
      <Container
        bgColor="#FAFAFA"
        display="grid"
        gap={5}
        paddingTop={5}
        paddingLeft={3}
        paddingRight={3}
        paddingBottom={10}
        className="fourColumnGridLayout customStyleForSixSection"
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

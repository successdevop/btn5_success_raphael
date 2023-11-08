import Container from "../components/general-components/Container";
import Section from "../components/general-components/Section";
import Navbar from "../components/header-section/Navbar";
import styles from "./PricingPage.module.css";
import BreadCrumbComponent from "../components/general-components/BreadCrumbComponent";
import PricingCard from "../components/general-components/PricingCard";
import BrandLogoImg from "../components/general-components/BrandLogoImg";
import { FiChevronRight } from "react-icons/fi";
import GlobalButton from "../components/general-components/GlobalButton";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Footer from "../components/footer-section/Footer";

function PricingPage() {
  return (
    <div className={styles.pricingPage}>
      <Navbar displaySecondMenu={false} />
      {/* first section */}
      <Section>
        <Container
          className={styles.firstSection}
          paddingTop={8.4}
          paddingBottom={4.8}
        >
          <div className={styles.firstSectionFirstBox}>
            <h5>PRICING</h5>
            <h2>Simple Pricing</h2>
            <BreadCrumbComponent bgColor="" subText="Pricing" />
          </div>
        </Container>
      </Section>

      {/* second section */}
      <Section bgColor="#fafafa">
        <Container
          bgColor="#fafafa"
          paddingTop={3}
          paddingBottom={3.9}
          paddingLeft={4.2}
          paddingRight={4.2}
          className={styles.secondSection}
        >
          <Container
            paddingBottom={4.5}
            paddingTop={4.5}
            bgColor=""
            display="grid"
            justifyItems="center"
            gap={4.8}
          >
            <div className={styles.firstDiv}>
              <h2>Pricing</h2>
              <p>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
            <div className={styles.secondDiv}>
              <div className={styles.secondDivControlBtn}>
                Monthly
                <button className={styles.secondDivBtn}>
                  <span className={styles.secondDivBtnCtrl}></span>
                </button>
                Yearly
              </div>
              <button>Save 25%</button>
            </div>
            <Container
              bgColor=""
              display="grid"
              gap={3}
              className={styles.pricingCardContainer}
            >
              <PricingCard />
            </Container>
          </Container>
        </Container>
      </Section>

      {/* third section */}
      <Section className={styles.thirdSection} bgColor="#fafafa">
        <h4 className={styles.thirdSectionHeader}>
          Trusted By Over 4000 Big Companies
        </h4>
        <BrandLogoImg />
      </Section>

      {/* fourth section */}
      <Section>
        <Container
          paddingTop={8}
          paddingBottom={8}
          paddingLeft={1}
          paddingRight={1}
          display="grid"
          gap={8}
          className={styles.fourthSection}
        >
          <div className={styles.fourthSectionHeaderBox}>
            <h2 className={styles.fourthSectionHeader}>Pricing FAQs</h2>
            <p className={styles.fourthSectionText}>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
          </div>
          <ul className={styles.fourthSectionList}>
            {fourthSectionData.map((list) => (
              <li className={styles.fourthSectionListItem} key={list.id}>
                <div className={styles.fourthSectionList1}>
                  <span className={styles.fourthSectionIcon}>
                    <list.icon size={"2rem"} stroke="#23A6F0" />
                  </span>
                  <h5 className={styles.fourthSectionListItemHeader}>
                    {list.itemHeader}
                  </h5>
                </div>
                <p className={styles.fourthSectionListItemText}>
                  {list.itemText}
                </p>
              </li>
            ))}
          </ul>
          <h4 className={styles.fourthSectionFooterInfo}>
            Haven’t got your answer? Contact our support
          </h4>
        </Container>
      </Section>

      {/* fifth section */}
      <Section className={styles.fifthSection}>
        <Container
          display="grid"
          gap={3}
          justifyItems="center"
          paddingTop={11.2}
          paddingBottom={11.2}
          paddingLeft={4.15}
          paddingRight={4.15}
          className={styles.fifthSectionInnerBox}
        >
          <h2 className={styles.fifthSectionHeader}>
            Start your 14 days free trial
          </h2>
          <p className={styles.fifthSectionText}>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <GlobalButton
            text="Try it for free now"
            paddingBottom={1.5}
            paddingTop={1.5}
            paddingLeft={4}
            paddingRight={4}
          />
          <div className={styles.fifthSectionSocialIcons}>
            <BsTwitter size={"3rem"} fill="#55ACEE" />
            <BsFacebook size={"3rem"} fill="#395185" />
            <BsInstagram size={"3rem"} fill="#000000" />
            <BsLinkedin size={"3rem"} fill="#0A66C2" />
          </div>
        </Container>
      </Section>

      <Footer otherPages={true} />
    </div>
  );
}

export default PricingPage;

const fourthSectionData = [
  {
    id: 1,
    icon: FiChevronRight,
    itemHeader: "Work better together",
    itemText:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequentsent nostrum met.",
  },
  {
    id: 2,
    icon: FiChevronRight,
    itemHeader: "OpenType features and Variable fonts",
    itemText:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequentsent nostrum met.",
  },
  {
    id: 3,
    icon: FiChevronRight,
    itemHeader: "Start working faster today",
    itemText:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequentsent nostrum met.",
  },
  {
    id: 4,
    icon: FiChevronRight,
    itemHeader: "Work at the speed of thought.",
    itemText:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequentsent nostrum met.",
  },
  {
    id: 5,
    icon: FiChevronRight,
    itemHeader: "The Fastest way to organize",
    itemText:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequentsent nostrum met.",
  },
  {
    id: 6,
    icon: FiChevronRight,
    itemHeader: "The Fastest way to navigate",
    itemText:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequentsent nostrum met.",
  },
];

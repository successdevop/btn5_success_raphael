import styles from "./AboutPage.module.css";
import Section from "../components/general-components/Section";
import Container from "../components/general-components/Container";
import GlobalButton from "../components/general-components/GlobalButton";
import { BsFillPlayFill } from "react-icons/bs";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";

import contact1Img from "../assets/contactImg/contact1.svg";
import contact2Img from "../assets/contactImg/contact2.svg";
import contact3Img from "../assets/contactImg/contact3.svg";
import contact4Img from "../assets/contactImg/contact4.svg";
import contact5Img from "../assets/contactImg/contact5.svg";
import contactVideo from "../assets/contactImg/contactVideo.svg";
import BrandLogoImg from "../components/general-components/BrandLogoImg";

const contactImages = [contact2Img, contact3Img, contact4Img];

function AboutPage() {
  return (
    <>
      {/* first section */}
      <Section>
        <Container
          display="grid"
          gap={4}
          justifyItems="center"
          paddingBottom={8}
          paddingTop={8}
          paddingLeft={3.3}
          paddingRight={3.3}
          className={styles.firstSection}
        >
          <div className={styles.firstSectionInfoBox}>
            <h5>ABOUT COMPANY</h5>
            <h2>ABOUT US</h2>
            <h4 className={styles.textQuote}>
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <GlobalButton text="Get Quote Now" />
          </div>
          <div className={styles.contactImg}>
            <img src={contact1Img} alt="a woman coming from shopping" />
          </div>
        </Container>
      </Section>

      {/* second section */}
      <Section>
        <Container
          className={styles.secondSection}
          display="grid"
          gap={3}
          paddingBottom={8}
          paddingTop={8}
          paddingLeft={3.3}
          paddingRight={3.3}
        >
          <div className={styles.headerInfo}>
            <h6>Problems trying</h6>
            <h2>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h2>
          </div>
          <p className={styles.headerText}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </Container>
      </Section>

      {/* third section */}
      <Section>
        <Container paddingBottom={10} paddingTop={10}>
          <ul className={styles.statsSection}>
            <li>
              <h1>15K</h1>
              <h5>Happy Customers</h5>
            </li>
            <li>
              <h1>150K</h1>
              <h5>Monthly Visitors</h5>
            </li>
            <li>
              <h1>15</h1>
              <h5>Countries Worldwide</h5>
            </li>
            <li>
              <h1>100+</h1>
              <h5>Top Partners</h5>
            </li>
          </ul>
        </Container>
      </Section>

      {/* fourth section */}
      <Section>
        <Container
          paddingBottom={8}
          paddingLeft={5.4}
          paddingRight={5.3}
          paddingTop={8.1}
        >
          <div className={styles.videoBox}>
            <img src={contactVideo} alt="video box" />
            <div className={styles.controlButton}>
              <BsFillPlayFill size={"2.5rem"} stroke="#fff" fill="#fff" />
            </div>
          </div>
        </Container>
      </Section>

      {/* fifth section */}
      <Section>
        <Container paddingBottom={3} paddingTop={3}>
          <div className={styles.headerBox}>
            <h2>Meet Our Team</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <Container display="grid" gap={3} className={styles.fifthSection}>
            {contactImages.map((users, i) => (
              <div key={i} className={styles.usersInfoContainer}>
                <div
                  className={styles.userImg}
                  style={{
                    background: `linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.15)),url(${users}) no-repeat top/cover`,
                  }}
                ></div>
                <div className={styles.userInfo}>
                  <h5>Username</h5>
                  <h6>Profession</h6>
                  <div className={styles.userSocialMedia}>
                    <GrFacebook fill="#335BF5" size="2.4rem" />
                    <GrInstagram fill="#E61F5A" size="2.4rem" />
                    <GrTwitter fill="#21A6DF" size="2.4rem" />
                  </div>
                </div>
              </div>
            ))}
          </Container>
        </Container>
      </Section>

      {/* sixth section */}

      <Section bgColor="#FAFAFA" className={styles.sixthSection}>
        <Container bgColor="#FAFAFA">
          <div className={styles.sixSectionInnerBox}>
            <h2>Big Companies Are Here</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </Container>
        <BrandLogoImg />
      </Section>

      {/* seventh Section */}
      <Section className={styles.workWithUs}>
        <div className={styles.workWithUsInnerBox}>
          <h5>WORK WITH US</h5>
          <h2>Now Let’s grow Yours</h2>
          <p>
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <button>Button</button>
        </div>
        <div className={styles.workWithUsImgBox}>
          <img src={contact5Img} alt="a lady" />
        </div>
      </Section>
    </>
  );
}

export default AboutPage;

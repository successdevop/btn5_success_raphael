import { footerData } from "../../data/appDataFile";
import Container from "../general-components/Container";
import GlobalButton from "../general-components/GlobalButton";
import FooterListItem from "./FooterListItem";
import styles from "./Footer.module.css";

import {
  BsTelephone,
  BsSend,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { GrFacebook, GrInstagram, GrTwitter, GrYoutube } from "react-icons/gr";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";

import PropTypes from "prop-types";
import AppBrandLogo from "../header-section/AppBrandLogo";

function Footer({ otherPages }) {
  return (
    <footer style={{ backgroundColor: otherPages ? "#FFF" : "#252B42" }}>
      <Container bgColor="" paddingLeft={4.4} paddingRight={4.4} maxWidth={130}>
        <Container bgColor="">
          {otherPages ? (
            <div className={styles.footerTopHeader2}>
              <AppBrandLogo />
              <div className={styles.footerHeaderIcons}>
                <BsFacebook size={"2.4rem"} fill="#23A6F0" />
                <BsInstagram size={"2.4rem"} fill="#23A6F0" />
                <BsTwitter size={"2.4rem"} fill="#23A6F0" />
              </div>
            </div>
          ) : (
            <div className={styles.footerTopHeader}>
              <div className={styles.footerTopHeaderInnerBox}>
                <h3>Consulting Agency For Your Business</h3>
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <GlobalButton
                fontSize={1.4}
                letterSpacing={0.02}
                lineHeight={2.2}
                paddingBottom={1.5}
                paddingTop={1.5}
              />
            </div>
          )}
        </Container>
        <Container
          bgColor=""
          paddingBottom={5}
          paddingTop={5}
          display="grid"
          gap={4}
          className={styles.footerLinks}
        >
          {footerData.map((data) => (
            <FooterListItem otherPage={otherPages} key={data.id} {...data} />
          ))}

          <ul className={styles.getInTouch}>
            <li style={{ color: otherPages && "#252B42" }}>Get In Touch</li>
            {otherPages ? (
              <div className={styles.emailBox}>
                <div className={styles.subscribe}>
                  <input type="text" placeholder="Your Email" />
                  <input type="text" value={"subscribe"} />
                </div>
                <p className={styles.emailText}>Lore imp sum dolor Amit</p>
              </div>
            ) : (
              <>
                <li>
                  <BsTelephone className={styles.getInTouchIcon} />
                  <span>(480) 555-0103</span>
                </li>
                <li>
                  <TfiLocationPin className={styles.getInTouchIcon} />
                  <span>4517 Washington Ave.</span>
                </li>
                <li>
                  <BsSend
                    className={`${styles.getInTouchIcon} ${styles.getInTouchIcon2A}`}
                  />
                  <TfiEmail
                    size={"2.4rem"}
                    className={styles.getInTouchIcon2}
                  />
                  <span>debra.holt@example.com</span>
                </li>
              </>
            )}
          </ul>
        </Container>
      </Container>
      <div style={{ background: otherPages ? "#F9F9F9" : "" }}>
        <div
          className={styles.footerBottomContent}
          style={{ maxWidth: "120rem", margin: "0 auto" }}
        >
          <h6
            style={{
              textAlign: otherPages && "center",
              color: otherPages && "#737373",
            }}
          >
            Made With Love By Finland All Right Reserved{" "}
          </h6>
          {!otherPages && (
            <div className={styles.footerBottomIcons}>
              <GrFacebook
                className={styles.mobile}
                size={"2.4rem"}
                fill="#335BF5"
              />
              <GrInstagram
                className={styles.mobile}
                size={"2.4rem"}
                fill="#E61F5A"
              />
              <GrTwitter
                className={styles.mobile}
                size={"2.4rem"}
                fill="#21A6DF"
              />
              <GrYoutube
                className={styles.mobile}
                size={"2.4rem"}
                fill="#E42F08"
              />

              <BsFacebook
                className={styles.desktop}
                size={"2.4rem"}
                fill="#23A6F0"
              />
              <BsInstagram
                className={styles.desktop}
                size={"2.4rem"}
                fill="#23A6F0"
              />
              <BsTwitter
                className={styles.desktop}
                size={"2.4rem"}
                fill="#23A6F0"
              />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  otherPages: PropTypes.bool,
};

export default Footer;

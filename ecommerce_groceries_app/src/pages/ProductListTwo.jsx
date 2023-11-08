import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import BreadCrumbComponent from "../components/general-components/BreadCrumbComponent";
import Container from "../components/general-components/Container";
import Section from "../components/general-components/Section";
import styles from "./ProductListTwo.module.css";
import { StarIcon } from "../UtilityIcons/IconFile";
import GlobalButton from "../components/general-components/GlobalButton";
import { BsCart, BsChevronRight, BsEyeFill, BsHeart } from "react-icons/bs";

import chair1 from "../assets/productPage2Images/product2Image1.svg";
import chair2 from "../assets/productPage2Images/product2Image2.svg";
import frameImg from "../assets/productPage2Images/product2Image3.svg";
import { Link } from "react-router-dom";
import MainHeaderText from "../components/general-components/MainHeaderText";
import { productPage2Images } from "../data/appDataFile";
import GeneralProductCard from "../components/general-components/GeneralProductCard";
import GeneralInfoCard from "../components/general-components/GeneralInfoCard";

import BrandLogoImg from "../components/general-components/BrandLogoImg";

function ProductListTwo() {
  return (
    <>
      {/* first section */}
      <Section>
        <Container className={styles.firstSection}>
          <Container
            bgColor="#FAFAFA"
            paddingTop={3}
            paddingLeft={3.3}
            paddingRight={3.3}
            paddingBottom={4.8}
          >
            <BreadCrumbComponent />
            <div className={styles.firstSectionInnerBox}>
              <div className={styles.carouselContainer}>
                <div className={styles.mainImg}>
                  <img src={chair1} alt={`${chair1}`.substring(10)} />
                  <FiChevronLeft
                    size="6rem"
                    className={styles.prevBtn}
                    stroke="#fff"
                  />
                  <FiChevronRight
                    size="6rem"
                    className={styles.nextBtn}
                    stroke="#fff"
                  />
                </div>
                <div className={styles.otherImg}>
                  <img src={chair2} alt={`${chair2}`.substring(10)} />
                  <img src={chair1} alt={`${chair1}`.substring(10)} />
                </div>
              </div>
              <div className={styles.carouselContentInfoBox}>
                <h4>Floating Phone</h4>
                <div className={styles.starRatingBox}>
                  <div className={styles.starBox}>
                    <StarIcon
                      stroke={"yellow"}
                      fill={"yellow"}
                      className={styles.starIcon}
                    />
                    <StarIcon
                      stroke={"yellow"}
                      fill={"yellow"}
                      className={styles.starIcon}
                    />
                    <StarIcon
                      stroke={"yellow"}
                      fill={"yellow"}
                      className={styles.starIcon}
                    />
                    <StarIcon
                      stroke={"yellow"}
                      fill={"yellow"}
                      className={styles.starIcon}
                    />
                    <StarIcon stroke={"yellow"} className={styles.starIcon} />
                  </div>
                  <h6 className="starText">10 Reviews</h6>
                </div>
                <h3 className={styles.price}>$1,139.33</h3>
                <div className={styles.availableBoxInfo}>
                  <h6>Availability :</h6>
                  <h6>In Stock </h6>
                </div>
                <p className="">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <hr className={styles.horizontalLine} />
                <div className={styles.colorsBox}>
                  <div className={`${styles.color} ${styles.blueColor}`}></div>
                  <div className={`${styles.color} ${styles.greenColor}`}></div>
                  <div
                    className={`${styles.color} ${styles.orangeColor}`}
                  ></div>
                  <div className={`${styles.color} ${styles.blackColor}`}></div>
                </div>
                <div className={styles.actionBoxInfo}>
                  <GlobalButton
                    text="Select Options"
                    paddingTop={0.7}
                    paddingBottom={0.7}
                    paddingLeft={1}
                    paddingRight={1}
                    fontSize={1.3}
                  />
                  <div className={styles.iconsBox}>
                    <span>
                      <BsHeart size={"2rem"} />
                    </span>
                    <span>
                      <BsCart size={"2rem"} />
                    </span>
                    <span>
                      <BsEyeFill size={"2rem"} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </Section>

      {/* second section */}
      <Section>
        <Container
          paddingTop={5}
          paddingBottom={5}
          paddingLeft={3}
          paddingRight={3}
          className={styles.secondSection}
        >
          <ul className={styles.secondSectionNav}>
            <li>
              <Link className={styles.link}>Description</Link>
            </li>
            <li>
              <Link className={styles.link}>Additional Information</Link>
            </li>
            <li>
              <Link className={styles.link}>
                Reviews <span className={styles.reviews}>(0)</span>
              </Link>
            </li>
          </ul>

          <div className={styles.secondSecondImgBox}>
            <img src={frameImg} alt={`${frameImg}`.substring(10)} />
          </div>

          <div className={styles.cardItem1}>
            <h5>the quick fox jumps over </h5>
            <p className={styles.cardItemText}>
              <span>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </span>
              <span>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </span>
              <span>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </span>
            </p>
          </div>
          <div className={styles.cardItem2}>
            <ul>
              <h5>the quick fox jumps over</h5>
              <li>
                <BsChevronRight /> the quick fox jumps over the lazy dog
              </li>
              <li>
                <BsChevronRight /> the quick fox jumps over the lazy dog
              </li>
              <li>
                <BsChevronRight /> the quick fox jumps over the lazy dog
              </li>
              <li>
                <BsChevronRight /> the quick fox jumps over the lazy dog
              </li>
            </ul>

            <ul>
              <h5>the quick fox jumps over</h5>
              <li>
                <BsChevronRight /> the quick fox jumps over the lazy dog
              </li>
              <li>
                <BsChevronRight /> the quick fox jumps over the lazy dog
              </li>
              <li>
                <BsChevronRight /> the quick fox jumps over the lazy dog
              </li>
              <li>
                <BsChevronRight /> the quick fox jumps over the lazy dog
              </li>
              <li>
                <BsChevronRight /> the quick fox jumps over the lazy dog
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* third section */}
      <Section>
        <Container
          bgColor="#FAFAFA"
          className={styles.thirdSection}
          paddingLeft={3}
          paddingRight={3}
        >
          <MainHeaderText paddingTop={5} paddingBottom={3} />
          <hr />
          <Container
            bgColor=""
            display="grid"
            gap={5}
            paddingBottom={10}
            className={styles.thirdSectionProductCardContainer}
          >
            {productPage2Images.map((item) => (
              <GeneralProductCard key={item.id} {...item} margin={0}>
                <GeneralInfoCard />
              </GeneralProductCard>
            ))}
          </Container>
        </Container>
      </Section>

      {/* fourth section */}
      <BrandLogoImg />
    </>
  );
}

export default ProductListTwo;

import { BsCheckLg } from "react-icons/bs";
import styles from "./PricingCard.module.css";
import PropTypes from "prop-types";
import GlobalButton from "./GlobalButton";

function PricingCard({ bgColor = "#fff" }) {
  return (
    <>
      {pricingCardData.map((pricingCard, i) => (
        <div
          className={styles.pricingCard}
          style={{
            background: i == 1 ? "#252B42" : bgColor,
          }}
          key={i + 1}
        >
          <div className={styles.pricingCardContentBox}>
            <h3
              className={styles.pricingCardContentBoxType}
              style={{
                color: i == 1 && "#fff",
              }}
            >
              {pricingCard.type}
            </h3>

            <h5
              className={styles.pricingCardContentBoxTypeInfo}
              style={{
                color: i == 1 && "#fff",
              }}
            >
              {pricingCard.typeInfo}
            </h5>

            <div className={styles.pricingCardPriceInfoBox}>
              <h2 className={styles.pricingCardPrice}>{pricingCard.price}</h2>
              <span className={styles.pricingCardPriceDuration}>
                <div className={styles.pricingCardPriceSymbol}>$</div>
                <p className={styles.PricingCardPriceInfo}>Per Month</p>
              </span>
            </div>

            <ul
              className={styles.pricingCardList}
              style={{ color: i == 1 && "#fff" }}
            >
              {pricingCard.items.map((item, i) => (
                <li className={styles.pricingCardListItem} key={i}>
                  <span
                    className={styles.pricingCardListCheckBox}
                    style={{ background: i > 2 && "#BDBDBD" }}
                  >
                    <BsCheckLg size={"1.6rem"} fill="#fff" />
                  </span>
                  <p className={styles.pricingCardListText}>{item.item}</p>
                </li>
              ))}
            </ul>
            <GlobalButton text="Try for free" />
          </div>
        </div>
      ))}
    </>
  );
}

PricingCard.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
};
export default PricingCard;

const pricingCardData = [
  {
    id: 1,
    type: "FREE",
    typeInfo: "Organize across all apps by hand",
    price: 0,
    items: [
      { item: "Unlimited product updates" },
      { item: "Unlimited product updates" },
      { item: "Unlimited product updates" },
      { item: "1GB  Cloud storage" },
      { item: "Email and community support" },
    ],
  },
  {
    id: 2,
    type: "STANDARD",
    typeInfo: "Organize across all apps by hand",
    price: 9.99,
    items: [
      { item: "Unlimited product updates" },
      { item: "Unlimited product updates" },
      { item: "Unlimited product updates" },
      { item: "1GB  Cloud storage" },
      { item: "Email and community support" },
    ],
  },
  {
    id: 3,
    type: "PREMIUM",
    typeInfo: "Organize across all apps by hand",
    price: 19.99,
    items: [
      { item: "Unlimited product updates" },
      { item: "Unlimited product updates" },
      { item: "Unlimited product updates" },
      { item: "1GB  Cloud storage" },
      { item: "Email and community support" },
    ],
  },
];

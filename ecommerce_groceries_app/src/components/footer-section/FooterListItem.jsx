import styles from "./FooterListItem.module.css";
import PropTypes from "prop-types";

function FooterListItem({ otherPage, itemHeader, items }) {
  return (
    <ul className={styles.footerListItem}>
      <li style={{ color: otherPage && "#252B42" }}>{itemHeader}</li>
      {items?.map((item, i) => (
        <li style={{ color: otherPage && "#737373" }} key={i}>
          {item.item}
        </li>
      ))}
    </ul>
  );
}

FooterListItem.propTypes = {
  itemHeader: PropTypes.string,
  items: PropTypes.array,
  otherPage: PropTypes.bool,
};
export default FooterListItem;

import styles from "./FooterListItem.module.css";

function FooterListItem({
  item1 = "",
  item2 = "",
  item3 = "",
  item4 = "",
  item5 = "",
  img2,
  img3,
  img4,
}) {
  return (
    <ul className={styles.footerListItem}>
      <li>{item1}</li>
      <li>
        {img2}
        {item2}
      </li>
      <li>
        {img3}
        {item3}
      </li>
      <li>
        {img4}
        {item4}
      </li>
      <li>{item5}</li>
    </ul>
  );
}

export default FooterListItem;

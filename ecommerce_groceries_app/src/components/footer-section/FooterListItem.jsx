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
  items,
}) {
  return (
    <ul className={styles.footerListItem}>
      <li>{item1}</li>
      {items?.map((item, i) => (
        <li key={i}>
          {item.img2 && <item.img2 className={styles.icon} />}
          {item.item2}
        </li>
      ))}
    </ul>
  );
}

export default FooterListItem;

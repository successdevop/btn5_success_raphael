import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* nav brand */}
      <div>
        <h3 className={styles["navbar-brand"]}>Bandage</h3>
      </div>
      {/* nav links */}
      <ul className={styles["navbar-nav"]}>
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="">Product</NavLink>
        </li>
        <li>
          <NavLink to="">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="">Contact</NavLink>
        </li>
      </ul>
      {/* nav icons */}
      <div className={styles["nav-icons"]}>
        <span>
          <AiOutlineSearch className={styles.navIcon} />
        </span>
        <span>
          <BsCart3 className={styles.navIcon} />
        </span>
        <span>
          <BiMenuAltRight className={styles.navIcon} />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;

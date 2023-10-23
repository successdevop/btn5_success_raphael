import { NavLink } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronDown, BsCart } from "react-icons/bs";
import { BiMenuAltRight, BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

import styles from "./NavbarTwo.module.css";
import AppBrandLogo from "./AppBrandLogo";

function NavbarTwo() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer2}>
        {/* nav brand */}
        <AppBrandLogo />

        {/* nav icons for mobile*/}
        <div className={styles.navIconsMobile2}>
          <span>
            <BiMenuAltRight className={styles.navIcon2} />
          </span>
        </div>

        {/* nav links for mobile */}
        <div className={styles.navbarNavMobile2}>
          {/* nav links for Desktop */}
          <ul className={styles.navbarNavDesktop2}>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="">
                Shop
                <BsChevronDown />
              </NavLink>
            </li>
            <li>
              <NavLink to="">About</NavLink>
            </li>
            <li>
              <NavLink to="">Blog</NavLink>
            </li>
            <li>
              <NavLink to="">Contact</NavLink>
            </li>
            <li>
              <NavLink to="">Pages</NavLink>
            </li>
          </ul>

          {/* nav icons for Desktop */}
          <ul className={styles.navIconsDesktop2}>
            <li>
              <FaRegUser /> Login/Register
            </li>
            <li>
              <BiSearch />
            </li>
            <li>
              <BsCart />
            </li>
            <li>
              <AiOutlineHeart />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarTwo;

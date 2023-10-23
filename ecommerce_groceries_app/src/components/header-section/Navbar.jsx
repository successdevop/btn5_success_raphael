import { NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsCart3, BsChevronDown, BsCart } from "react-icons/bs";
import { BiMenuAltRight, BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

import styles from "./Navbar.module.css";
import AppBrandLogo from "./AppBrandLogo";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* nav brand */}
        <AppBrandLogo />
        {/* nav links for mobile */}
        <ul className={styles.navbarNavMobile}>
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
        {/* nav icons for mobile*/}
        <div className={styles.navIconsMobile}>
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

        {/* DESKTOP DESIGN */}
        <div className={styles.desktopContainer}>
          {/* nav links for Desktop */}
          <ul className={styles.navbarNavDesktop}>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="">
                Shop
                <span>
                  <BsChevronDown />
                </span>
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
          <ul className={styles.navIconsDesktop}>
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

export default Navbar;

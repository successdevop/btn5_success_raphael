import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Navbar.module.css";

import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BsCart3, BsCart, BsHeart } from "react-icons/bs";
import { BiMenuAltRight, BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

import AppBrandLogo from "./AppBrandLogo";
import { headerMenuItems1, headerMenuItems2 } from "../../data/appDataFile";
import GlobalButton from "../general-components/GlobalButton";
import { useState } from "react";

function Navbar({ displaySecondMenu = true, isLoginPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.navbarContainer}
        style={{
          height:
            isMenuOpen && displaySecondMenu
              ? "87rem"
              : isMenuOpen && !displaySecondMenu
              ? "53.2rem"
              : "",
        }}
      >
        {/* nav brand */}
        <AppBrandLogo />

        {/* navigation icons */}
        <div className={styles.navIcons}>
          {!displaySecondMenu && (
            <>
              <span>
                <AiOutlineSearch size="2.4rem" fill="#252b42" />
              </span>
              <span>
                <BsCart3 size="2.4rem" fill="#252b42" />
              </span>
            </>
          )}
          <span onClick={() => setIsMenuOpen((open) => !open)}>
            {isMenuOpen ? (
              <AiOutlineClose size="2.4rem" fill="#252b42" />
            ) : (
              <BiMenuAltRight size="2.4rem" fill="#252b42" />
            )}
          </span>
        </div>

        <div
          className={
            isMenuOpen
              ? `${styles.navLinksContainer} ${styles.open}`
              : styles.navLinksContainer
          }
        >
          {/* navigation links for */}
          <ul className={styles.navbarNav}>
            {isLoginPage || !displaySecondMenu
              ? headerMenuItems1.map((menu) => (
                  <li key={menu.id}>
                    <NavLink to={menu.href}>{menu.menu}</NavLink>
                  </li>
                ))
              : headerMenuItems2.map((menu) => (
                  <li key={menu.id}>
                    <NavLink to={menu.href}>
                      {menu.menu} {menu.icon && <menu.icon size={"2rem"} />}
                    </NavLink>
                  </li>
                ))}
          </ul>
          {/*  */}

          <ul
            className={styles.navbarNav2}
            style={{ display: !displaySecondMenu && "none" }}
          >
            <li>
              <Link>
                <button>
                  <FaRegUser size={"2rem"} className={styles.userNavIcons} />
                  <span>Login/Register</span>
                </button>
              </Link>
            </li>
            <li>
              <Link>
                <button>
                  <BiSearch size={"2.5rem"} className={styles.userNavIcons} />
                </button>
              </Link>
            </li>
            <li>
              <Link>
                <button>
                  <BsCart size={"2.5rem"} className={styles.userNavIcons} /> {1}
                </button>
              </Link>
            </li>
            <li>
              <Link>
                <button>
                  <BsHeart size={"2.5rem"} className={styles.userNavIcons} />
                  {1}
                </button>
              </Link>
            </li>
          </ul>

          {isLoginPage && (
            <div className={styles.loginAndBecomeAMember}>
              <Link>Login</Link>
              <GlobalButton
                text="Become a member &#x2192;"
                lineHeight={2.2}
                letterSpacing={0.02}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
Navbar.propTypes = {
  displaySecondMenu: PropTypes.bool,
  isLoginPage: PropTypes.bool,
};

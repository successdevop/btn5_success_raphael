import styles from "./SocialMediaIcons.module.css";

import { GrFacebook } from "react-icons/gr";
import { RxInstagramLogo } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import { BiLogoYoutube } from "react-icons/bi";

function SocialMediaIcons() {
  return (
    <div className={styles.socialMediaIcons}>
      <GrFacebook className={styles.facebook} />
      <RxInstagramLogo className={styles.instagramLogo} />
      <FaTwitter className={styles.twitter} />
      <BiLogoYoutube className={styles.youtube} />
    </div>
  );
}

export default SocialMediaIcons;

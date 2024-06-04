import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <footer>
        <div className={`${styles.footerContainer}`}>
          <div className="logo-socialIcons">
            <div className="footer-logo">
              <img
                src="./images/Lush Hues Design Logo.jpg"
                alt="logo-footer"
                width="210px"
              />
            </div>
            <div className={`${styles.footerSocialIcons}`}>
              <ul className={`d-flex ${styles.socialIcons}`}>
                <li>
                  <Link
                    to="https://www.facebook.com/profile.php?id=61556437637196"
                    className="fa-brands fa-facebook-f"
                  ></Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/lushhuesdesign/"
                    className="fa-brands fa-instagram"
                  ></Link>
                </li>
                <li>
                  <Link to="https://nl.pinterest.com/lushhuesdesigns/"
                    className="fa-brands fa-pinterest-p"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

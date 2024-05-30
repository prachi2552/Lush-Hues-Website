import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <footer>
        <div
          className={`${styles.footerContainer}`}
        >
          <div className="logo-socialIcons">
            <div className="footer-logo">
              <img
                src="./images/Lush Hues Design Logo.jpg"
                alt="logo-footer"
                width="210px"
              />
            </div>
            <div className={`${styles.footerSocialIcons}`} >
              <ul
                className={`d-flex ${styles.socialIcons}`}
              >
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61556437637196"
                    className="fa-brands fa-facebook-f"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lushhuesdesign/"
                    className="fa-brands fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://nl.pinterest.com/lushhuesdesigns/"
                    className="fa-brands fa-pinterest-p"
                  ></a>
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

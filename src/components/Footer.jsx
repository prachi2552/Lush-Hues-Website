import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <footer>
        <div
          className="d-flex footer-container"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="logo-socialIcons">
            <div className="footer-logo">
              <img
                src="./images/Lush Hues Design Logo.jpg"
                alt="logo-footer"
                width="210px"
              />
            </div>
            <div className="footer-socialIcons" style={{ paddingTop: "12px" }}>
              <ul
                className={`d-flex ${styles.socialIcons}`}
              >
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61556437637196"
                    className="fa-brands fa-facebook-f"
                    style={{ color: "rgb(148, 132, 98)" }}
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lushhuesdesign/"
                    className="fa-brands fa-instagram"
                    style={{ color: "rgb(148, 132, 98)" }}
                  ></a>
                </li>
                <li>
                  <a
                    href="https://nl.pinterest.com/lushhuesdesigns/"
                    className="fa-brands fa-pinterest-p"
                    style={{ color: "rgb(148, 132, 98)" }}
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

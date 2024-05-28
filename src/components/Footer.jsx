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
          <div className="logo-social-icons">
            <div className="footer-logo">
              <img
                src="./images/Lush Hues Design Logo.jpg"
                alt="logo-footer"
                width="210px"
              />
            </div>
            <div className="footer-social-icons" style={{ paddingTop: "12px" }}>
              <ul
                className="d-flex social-icons"
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  boxSizing: "border-box",
                  alignItems: "center",
                  listStyleType: "none",
                  paddingLeft: "0px",
                }}
              >
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61556437637196"
                    class="fa-brands fa-facebook-f"
                    style={{ color: "rgb(148, 132, 98)" }}
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lushhuesdesign/"
                    class="fa-brands fa-instagram"
                    style={{ color: "rgb(148, 132, 98)" }}
                  ></a>
                </li>
                <li>
                  <a
                    href="https://nl.pinterest.com/lushhuesdesigns/"
                    class="fa-brands fa-pinterest-p"
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

import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="main-nav">
      <nav className="navbar navbar-expand-sm navbar-light">
        <div
          className="d-flex  lush-container-fluid"
          style={{ paddingLeft: "15px" }}
        >
          <a className="navbar-brand" href="#">
            <img
              src="./images/Lush Hues Design Logo.jpg"
              alt="Logo"
              width="140"
            />
          </a>
          <div
            id="navbarNav"
            className={`justify-content-end collapse navbar-collapse ${styles["lushhues-container"]}`}
            style={{ paddingTop: "17px" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`d-flex ${styles.navLink} active`}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`${styles.navLink}`} href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className={`${styles.navLink}`} href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${styles.navLink}`}
                  href="https://lushhues.etsy.com"
                >
                  Etsy Shop
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.searchContainer}`}
          >
            <form className={`form-inline ${styles.searchForm}`}>
              <input
                className={`${styles.formControl} mr-sm-2`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className={`${styles.searchIcon}`}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

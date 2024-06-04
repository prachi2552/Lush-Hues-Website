import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-nav">
      <nav className="navbar navbar-expand-sm navbar-light">
        <div
          className="d-flex  lush-container-fluid"
          style={{ paddingLeft: "15px" }}
        >
          <Link to="#" className={`${styles.navbarBrand}`} >
            <img
              src="./images/Lush Hues Design Logo.jpg"
              alt="Logo"
              width="150"
            />
          </Link>
          <div
            id="navbarNav"
            className={`collapse navbar-collapse ${styles.lushhuesContainer}`}
          >
            <ul className={`navbar-nav ${styles.lushhuesContainer}`}>
              <li className="nav-item">
                <Link to="/"
                  clLinkssName={`d-flex ${styles.navLink} active`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`${styles.navLink}`} >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={`${styles.navLink}`} >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="https://lushhues.etsy.com"
                  className={`${styles.navLink}`}

                >
                  Etsy Shop
                </Link>
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

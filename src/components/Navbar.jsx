import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {navbar, LushContainerFluid

//lush-container-fluid, navbar-brand, navbar-collapse, lushhues-container, nav-item, nav-link, search-container } from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="lush-container-fluid" style={{ paddingLeft: "20px" }}>
          <a className="navbar-brand" href="#">
            <img
              src="./images/Lush Hues Design Logo.jpg"
              alt="Logo"
              width="140"
            />
          </a>
          <div
            className="collapse navbar-collapse "
            style={{paddingTop: '17px'}}
            id="navbarNav"
          >
            <ul className="navbar-nav lushhues-container">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://lushhues.etsy.com">
                  Etsy Shop
                </a>
              </li>
            </ul>
          </div>
          <div className="search-container">
            <form className="form-inline search_form">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="search-icon">
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

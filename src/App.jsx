import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cover from "./components/Cover";
import BirthdayCardRow from "./components/BirthdayCardRow";
import BabyShowerCardRow from "./components/BabyShowerCardRow";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route path="/about" component={<About />} />
          <Route path="/contact" component={<Contact />} />
        </Routes>
      </div>
      <div>
        <div>
          <Cover />
        </div>
        <div className="listing-title">
          <h4
            className="listing-heading"
            style={{
              textAlign: "center",
              paddingTop: "50px",
              color: "rgb(148, 132, 98)",
            }}
          >
            Birthday Invitations
          </h4>
        </div>
        <div>
          <BirthdayCardRow />
        </div>
        <div className="listing-title">
          <h4
            className="listing-heading"
            style={{
              textAlign: "center",
              paddingTop: "80px",
              color: "rgb(148, 132, 98)",
            }}
          >
            Baby Shower Invitations
          </h4>
        </div>
        <div>
          <BabyShowerCardRow />
        </div>
        <div>
          <hr />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

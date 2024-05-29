import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cover from "./components/Cover";
import BirthdayCardRow from "./components/BirthdayCardRow";
import BabyShowerInvitationCards from "./components/BabyShowerInvitationCards";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
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
        <BabyShowerInvitationCards />
      </div>
      <div>
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;

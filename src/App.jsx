import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BirthdayInvitationCards from "./components/BirthdayInvitationCards";
import BabyShowerInvitationCards from "./components/BabyShowerInvitationCards";

function App() {
  return (
    <div>
      <div>
      <Navbar />
      </div>
      <div className="lushhues-cover">
        <img src="./images/Etsy banner - 1600px x 400px.jpeg" alt="etsy-cover"
        style={{maxWidth: "100%"}} />
      </div>
      <div className="listing-title">
        <h4 className="listing-heading"
        style={{textAlign: "center",
          paddingTop: "50px",
          color: "rgb(148, 132, 98)"
        }}>Birthday Invitations</h4>
      </div>
      <div>
        <BirthdayInvitationCards />
      </div>
      <div className="listing-title">
       <h4 className="listing-heading" style={{textAlign: "center",
          paddingTop: "80px",
          color: "rgb(148, 132, 98)"
        }}>Baby Shower Invitations</h4>
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

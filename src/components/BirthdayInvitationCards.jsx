import React from "react";

const BirthdayInvitationCards = () => {
  return (
  <div className="container mt-4">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <img src="./images/Birthday Invitations/Listing img-2.jpg" className="card-img-top card-thumbnail"
            alt="safari-invite"/>
          <div className="card-body" style={{textAlign: "center"}}>
            <p className="card-text">Safari Birthday Invitation</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="./images/Birthday Invitations/Listing img-1.jpeg" className="card-img-top" alt="under-the-sea-invite"/>
          <div className="card-body" style={{textAlign: "center"}}>
            <p className="card-text">Under The Sea Birthday Invitation</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="./images/Birthday Invitations/Listing img-3.jpg" className="card-img-top" alt="farm-invite"/>
          <div className="card-body" style={{textAlign: "center"}}>
            <p className="card-text">Farm Birthday Invitation</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default BirthdayInvitationCards;

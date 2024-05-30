import React from "react";

const BabyShowerInvitationCards = () => {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src="./images/Baby Shower Invitations/Baby-shower-listing img-2.jpg"
              className="card-img-top card-thumbnail"
              alt="blue-balloon-invite"
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <p className="card-text">Gender Neutral Baby Shower Invitation</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="./images/Baby Shower Invitations/Listing img-3.jpeg"
              className="card-img-top"
              alt="under-the-sea-invite"
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <p className="card-text">
                Pink Hot Air Balloon Baby Shower Invitation
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="./images/Baby Shower Invitations/Baby-shower-listing img-1.jpg"
              className="card-img-top"
              alt="farm-invite"
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <p className="card-text">
                {" "}
                Blue Hot Air Balloon Baby Shower Invitation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyShowerInvitationCards;

import React from "react";
import Cover from "../components/Cover";
import CategoryCardRow from "../components/CategoryCardRow";

const Home = () => {
  return (
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
        <CategoryCardRow filterCategory="Birthday Invitations" />
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
        <CategoryCardRow filterCategory="Baby Shower Invitations" />
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
          Favor Tags
        </h4>
      </div>
      <div>
        <CategoryCardRow filterCategory="Favor Tags" />
      </div>
    </div>
  );
};

export default Home;

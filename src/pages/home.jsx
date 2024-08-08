import React from "react";
import Cover from "../components/Cover";
import CategoryCardRow from "../components/CategoryCardRow";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Cover />
      </div>
      <div
        className="listing-title"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          position: "relative",
        }}
      >
        <h4
          className="listing-heading"
          style={{
            position: "absolute",
            left: "50%",
            paddingTop: "50px",
            transform: "translateX(-50%)",
            color: "rgb(148, 132, 98)",
          }}
        >
          Birthday Invitations
        </h4>

        <h6
          style={{
            marginLeft: "auto",
            paddingRight: "75px",
            paddingTop: "50px",
            color: "rgb(148, 132, 98)",
          }}
        >
          <Link
            to="/all-cards"
            state={{ filterCategory: "Birthday Invitations" }}
          >
            Show All
          </Link>
        </h6>
      </div>
      <div>
        <CategoryCardRow filterCategory="Birthday Invitations" />
      </div>
      <div className="listing-title"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        position: "relative",
      }}>
        <h4
          className="listing-heading"
          style={{
            position: "absolute",
            left: "50%",
            paddingTop: "50px",
            transform: "translateX(-50%)",
            color: "rgb(148, 132, 98)",
          }}
        >
          Baby Shower Invitations
        </h4>
        <h6
          style={{
            marginLeft: "auto",
            paddingRight: "75px",
            paddingTop: "50px",
            color: "rgb(148, 132, 98)",
          }}
        >
          <Link
            to="/all-cards"
            state={{ filterCategory: "Baby Shower Invitations" }}
          >
            Show All
          </Link>
        </h6>
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

import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ card }) => {
  const navigate = useNavigate();

  return (
    <div
      className="col"
      onClick={() =>
        navigate("/card-details", {
          state: { cardDetail: card },
        })
      }
    >
      <div className="card">
        <img
          src={card.img}
          alt={card.title}
          className="card-img-top card-thumbnail"
        />
        <div className="card-body" style={{ textAlign: "center" }}>
          <p className="card-text"> {card.title} </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

import React from "react";
import { useLocation } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import cardData from "../data/cardData.json";

const AllCards = () => {
  const location = useLocation();
  const { filterCategory } = location.state || {};
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardData
          .filter((card) => card.category === filterCategory)
          .map((card) => (
            <CategoryCard key={card.id} card={card} />
          ))}
      </div>
    </div>
  );
};

export default AllCards;

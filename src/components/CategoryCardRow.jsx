import React from "react";
import CategoryCard from "./CategoryCard";
import cardData from "../data/cardData.json";

const CategoryCardRow = ({ filterCategory }) => {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardData
          .filter((card) => card.category === filterCategory)
          .map((card, index) => (
            <CategoryCard key={index} card={card} />
          ))}
      </div>
    </div>
  );
};

export default CategoryCardRow;

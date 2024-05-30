import React from "react";
import CategoryCard from "./CategoryCard";

const categoryCardData = [
  {
    img: "./images/Baby Shower Invitations/Baby-shower-listing img-2.jpg",
    title: "Gender Neutral Baby Shower Invitation",
  },
  {
    img: "./images/Baby Shower Invitations/Listing img-3.jpeg",
    title: "Pink Hot Air Balloon Baby Shower Invitation",
  },
  {
    img: "./images/Baby Shower Invitations/Baby-shower-listing img-1.jpg",
    title: "Blue Hot Air Balloon Baby Shower Invitation",
  },
];

const BabyShowerCardRow = () => {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {categoryCardData.map((card, index) => (
          <CategoryCard
          key={index}
          img={card.img}
          title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default BabyShowerCardRow;

import React from "react";
import CategoryCard from "./CategoryCard";

const categoryCardData = [
  {
    img: './images/Birthday Invitations/Listing img-2.jpg',
    title: 'Safari Birthday Invitation'
  },
  {
    img: './images/Birthday Invitations/Listing img-1.jpeg',
    title: 'Under The Sea Birthday Invitation'
  },
  {
    img: './images/Birthday Invitations/Listing img-3.jpg',
    title: 'Farm Birthday Invitation'
  },
];

const BirthdayCardRow = () => {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {categoryCardData.map((card, index) => (
          <CategoryCard key={index}
          img={card.img}
          title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default BirthdayCardRow;

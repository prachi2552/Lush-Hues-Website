import React from "react";

const CategoryCard = ({img, title}) => {
  return (
    <div className="col">
      <div className="card">
        <img src={img} alt={title} className="card-img-top card-thumbnail" />
        <div className="card-body" style={{ textAlign: "center" }}>
          <p className="card-text"> {title} </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

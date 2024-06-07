import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./CardDetails.module.css";

const CardDetails = () => {
  const location = useLocation();
  const { cardDetail = "" } = location.state || {};
  // const cardDetail = cardData.find((card) => card.id === index);

  // console.log(cardData.find((card) => card.id === index));

  return (
    <>
      {cardDetail.img && (
        <div className={`${styles.cardDetailsContainer}`}>
          <div className="row">
            <div className="col-md-6">
              <img
                src={cardDetail.img}
                alt={cardDetail.title}
                className="card-img-top card-thumbnail"
              />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  {cardDetail.title && <div>{cardDetail.title}</div>}
                  {cardDetail.rating && <div>{cardDetail.rating}</div>}
                  {cardDetail.price && <div>{cardDetail.price}</div>}
                  {cardDetail.description && <div>{cardDetail.description}</div>}
                  {cardDetail.size && <div>{cardDetail.size}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetails;

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
                  {cardDetail.title && (
                    <div>
                      <h3>{cardDetail.title}</h3>
                    </div>
                  )}
                  {cardDetail.rating && <div>{cardDetail.rating}</div>}
                  {cardDetail.price && <div>{cardDetail.price}</div>}
                  {cardDetail.description && (
                    <div>{cardDetail.description}</div>
                  )}
                  {cardDetail.size && <div>{cardDetail.size}</div>}
                  <div>
                    <h4>HOW IT WORKS </h4>
                    <p>
                      1. After purchase, you will receive an email with a PDF
                      attachment containing links to your templates. 2. Sign up
                      or log in to Canva using the link in the PDF. 3. Customize
                      your template (text, fonts, colors) but not the size. 4.
                      Save and download as PDF or JPG. 5. Print at home or a
                      print shop, or share via text, email, or social media.
                    </p>
                  </div>
                  <div>
                    <h4>PLEASE NOTE</h4>
                    <p>
                      • The colors you see on your computer screen may differ
                      from the printed version due to your computer and printing
                      settings. • We recommend printing on heavy card stock (240
                      - 290 gsm) for best results. • If you have any questions,
                      requests, or problems, please feel free to contact us
                      anytime. We will get back to you within 24 hours. * * The
                      template is for personal use only and not for commercial
                      use. * *
                    </p>
                  </div>
                  <div>
                    <h4>RETURNS</h4>
                    <p>
                      Returns, exchanges, or cancellations are not accepted for
                      digital products. Kindly contact us if you have any
                      questions before purchasing.
                    </p>
                  </div>
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

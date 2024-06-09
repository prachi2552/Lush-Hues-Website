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
          <div className={`row ${styles.cardDetail}`}>
            <div className={`col-md-6 ${styles.imageContainer}`}>
              <img
                src={cardDetail.img}
                alt={cardDetail.title}
                className="card-img-top card-thumbnail"
              />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className={`col-md-12 ${styles.infoContainer}`}>
                  <hr />
                  {cardDetail.title && (
                    <div className={`${styles.cardDetailTitle}`}>
                      <h1>{cardDetail.title}</h1>
                    </div>
                  )}
                  <br />
                  {cardDetail.rating && <div>{cardDetail.rating}</div>}
                  <br />
                  {cardDetail.price && <div>{cardDetail.price}</div>}
                  <br />
                  {cardDetail.description && (
                    <div>{cardDetail.description}</div>
                  )}
                  {cardDetail.size && <div>{cardDetail.size}</div>}
                  <br />
                  <div>
                    <h4>HOW IT WORKS </h4>
                    <ol>
                      <li>
                        After purchase, you will receive an email with a PDF
                        attachment containing links to your templates.
                      </li>
                      <li>
                        Sign up or log in to Canva using the link in the PDF.
                      </li>
                      <li>
                        Customize your template (text, fonts, colors) but not
                        the size.
                      </li>
                      <li>Save and download as PDF or JPG.</li>
                      <li>
                        Print at home or a print shop, or share via text, email,
                        or social media.
                      </li>
                    </ol>
                  </div>
                  <br />
                  <div>
                    <h4>PLEASE NOTE</h4>
                    <ul>
                      <li>
                        The colors you see on your computer screen may differ
                        from the printed version due to your computer and
                        printing settings.
                      </li>
                      <li>
                        We recommend printing on heavy card stock (240 - 290
                        gsm) for best results.
                      </li>
                      <li>
                        If you have any questions, requests, or problems, please
                        feel free to contact us anytime. We will get back to you
                        within 24 hours.
                      </li>
                    </ul>

                    <p>
                      * * The template is for personal use only and not for
                      commercial use. * *
                    </p>
                  </div>
                  <br />
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

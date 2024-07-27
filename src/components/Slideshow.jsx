import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slideshow.module.css"; // Optional, for custom styling

const Slideshow = ({ cardDetail }) => {
  // Function to encode URL
  const encodeUrl = (url) => encodeURIComponent(url);

  return (
    <Slide>
      {cardDetail.listingImages.map((listingImage) => {
        // Encode URL to handle special characters
        const imageUrl = encodeUrl(listingImage.listingImageUrl);

        return (
          <div className={styles.eachSlideEffect} key={listingImage.id}>
            <div
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
              className={styles.slideImage}
            >
              <span>{listingImage.title}</span>
            </div>
          </div>
        );
      })}
    </Slide>
  );
};

export default Slideshow;

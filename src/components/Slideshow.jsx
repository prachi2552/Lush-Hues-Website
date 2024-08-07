import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slideshow.module.css"; // Optional, for custom styling

const Slideshow = ({ cardDetail }) => {
  // Function to encode URL
  const encodeUrl = (url) => encodeURIComponent(url);

  return (
    <Slide  autoplay={false}
    onChange={function noRefCheck(){}}
    onStartChange={function noRefCheck(){}}
  >
      {cardDetail.listingImages.map((listingImage) => {
        // Encode URL to handle special characters
        const imageUrl = encodeUrl(listingImage.listingImageUrl);

        return (
          <div className={`${styles.eachSlideEffect}`} key={listingImage.id}>
            <div className={`${styles.sliderImage}`}>
              <img src={imageUrl} alt={listingImage.title} />

            </div>
          </div>
        );
      })}
    </Slide>
  );
};

export default Slideshow;

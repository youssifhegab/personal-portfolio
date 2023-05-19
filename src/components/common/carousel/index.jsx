import React from "react";
import "./style.scss";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = ({ images }) => {
  return (
    <div className='carousel-container'>
      <Carousel
        autoPlay
        dynamicHeight={false}
        infiniteLoop
        showThumbs={false}
        showArrows={true}
        showStatus={false}
      >
        {images?.map((image) => (
          <div key={image.id}>
            <img
              src={image.image}
              alt={`portfolio ${image.id}`}
              className='carousel-image'
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

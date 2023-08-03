import '../styles/components/Carousel.css'
import React, { useState } from 'react';
import arrowLeft from '../assets/arrowLeftD.svg'
import arrowRight from '../assets/arrowRightD.svg'

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${currentIndex * 1240}px)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="carousel-image"
              style={{ objectFit: 'cover', height: '415px', borderRadius: '25px' }}
            />
          ))}
        </div>
      </div>
      <div className="carousel-nav">
        <button className="prev-button" onClick={handlePrev}>
          <img src={arrowLeft} alt="Previous" />
        </button>
        <button className="next-button" onClick={handleNext}>
          <img src={arrowRight} alt="Next" />
        </button>
      </div>
        <span className="carousel-counter">{`${currentIndex + 1}/${images.length}`}</span>
    </div>
  );
};
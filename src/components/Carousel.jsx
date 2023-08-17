import '../styles/components/Carousel.css'
import React, { useState } from 'react';
import arrowLeft from '../assets/arrowLeftD.svg'
import arrowRight from '../assets/arrowRightD.svg'

export default function Carousel(props) {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      {images.length > 1 && (
        <button className="carousel-button carousel-prev" onClick={handlePrev}>
        <img src={arrowLeft} alt='arrowLeft' />
      </button>
        )}

        {images.length > 1 && (
          <button className="carousel-button carousel-next" onClick={handleNext}>
        <img src={arrowRight} alt='arrowRight' />
      </button>
        )}


      {images.length > 1 && (
      <span className="carousel-counter">{currentIndex + 1}/{images.length}</span>
      )}
      <img className="carousel-image" src={images[currentIndex]} alt='carousel' />
    </div>
  )
};
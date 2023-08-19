import '../styles/components/Carousel.css'

import React, { useState } from 'react';

import arrowLeft from '../assets/arrowLeft.svg'
import arrowRight from '../assets/arrowRight.svg'

export default function Carousel(props) {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((index) => (index + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((index) => (index - 1 + images.length) % images.length);
  };

  return (
    <div className='carousel'>
      {images.length > 1 && (
        <>
          <button className='carousel-button carousel-prev' onClick={handlePrev}>
            <img src={arrowLeft} alt='arrowLeft' />
          </button>

          <button className='carousel-button carousel-next' onClick={handleNext}>
            <img src={arrowRight} alt='arrowRight' />
          </button>

          <span className='carousel-counter'>{currentIndex + 1}/{images.length}</span>
        </>
      )}
      <img className='carousel-image' src={images[currentIndex]} alt='carousel' />
    </div>
  )
};
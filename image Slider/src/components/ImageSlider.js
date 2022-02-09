import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [imageNum, setImageNum] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setImageNum(imageNum === length - 1 ? 0 : imageNum + 1);
  };

  const prevSlide = () => {
    setImageNum(imageNum === 0 ? length - 1 : imageNum - 1);
  };



  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === imageNum ? 'slide active' : 'slide'}
        
          >
            {index === imageNum && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;

import React, { useEffect, useRef, useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [imageNum, setImageNum] = useState(0);
  const length = slides.length;
  const interval = useRef(null)

  useEffect(()=>{
    interval.current = setInterval(()=>{
      nextSlide()
      clearInterval(interval)
    }, 2500)
  })

  const nextSlide = () => {
    clearInterval(interval.current)
    setImageNum(imageNum === length - 1 ? 0 : imageNum + 1);
  };

  const prevSlide = () => {
    clearInterval(interval.current)
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
            key={index}
          >
            {index === imageNum && (
              <img src={slide.image} alt='travel' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;

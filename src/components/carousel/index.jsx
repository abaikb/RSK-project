import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import style from './carousel.module.css';
import Image1 from '../../components/images/slide1.png';
import Image2 from '../../components/images/slide2.png';
import Image3 from '../../components/images/slide3.png';
import Image4 from '../../components/images/slide4.png';

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={style.container}>
      <Carousel
        className={style.carousel}
        showArrows={false}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        selectedItem={currentSlide}
      >
        <div>
          <img src={Image1} alt="image" />
        </div>
        <div>
          <img src={Image2} alt="image" />
        </div>
        <div>
          <img src={Image3} alt="image" />
        </div>
        <div>
          <img src={Image4} alt="image" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

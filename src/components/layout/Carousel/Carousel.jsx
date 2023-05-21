import React, { useState } from 'react';
import ClientCard from '../ClientCard/ClientCard';

// ? Css
import './Carousel.css';

// ? Icons
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';

const Carousel = ({ slides }) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const imagesClientes = [];

   const goToPrevious = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
   };

   const goToNext = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
   };

   return (
      <div className="carousel">
         <FaQuoteLeft className="carousel-icon-quot" />
         <div className="carousel-conteiner">
            <BsFillArrowLeftCircleFill
               className="carousel-icon-control"
               onClick={goToPrevious}
            />
            <div className="carousel-slide">
               {slides.map((slide, index) => (
                  <div
                     className={`carousel-item ${
                        index === currentIndex ? 'active' : ''
                     }`}
                     key={slide.name + ' ' + index}
                  >
                     <ClientCard
                        name={slide.name}
                        text={slide.text}
                        image={slide.image}
                        gender={slide.gender}
                        key={slide.name + ' ' + index}
                     />
                  </div>
               ))}
            </div>
            <BsFillArrowRightCircleFill
               className="carousel-icon-control"
               onClick={goToNext}
            />
         </div>
      </div>
   );
};

export default Carousel;

import React, { useEffect, useState } from 'react';

import '../scss/Carousel.scss';
import cat from "../images/cat.jpg";
import mountain from "../images/mountain.jpg";
import sphere from "../images/sphere1.jpg";

const Carousel = () => {
  const [currentImageNumber, setCurrentImageNumber] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const intervalRef = setInterval(() => {
        setCurrentImageNumber((lastVal) => {
          lastVal++;

          if (lastVal > 3) lastVal = 1;

          return lastVal;
        });
      }, 20000);

      return () => {
        clearInterval(intervalRef);
      };
    } else {
    }
  }, [isHovered]);

  const nextHandler = () => {
    setCurrentImageNumber((lastVal) => {
      lastVal++;

      if (lastVal > 3) lastVal = 1;

      return lastVal;
    });
  };

  const prevHandler = () => {
    setCurrentImageNumber((lastVal) => {
      lastVal--;

      if (lastVal < 1) lastVal = 3;

      return lastVal;
    });
  };

  const goToFirstHandler = () => {
    setCurrentImageNumber(1);
    // console.log('hi');
  };

  const goToSecond = () => {
    setCurrentImageNumber(2);
  };

  const goToThird = () => {
    setCurrentImageNumber(3);
  };

  const mouseEnterHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  return (
    <section
      className="container"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {/* <img src={`assets/carousel-${currentImageNumber}.jpg`} /> */}
      {currentImageNumber === 1 && (
        <div className="img img--1">
          <img src={cat} alt="image-1"/>
          <span>This is slide one</span>
        </div>
      )}
      {currentImageNumber === 2 && (
        <div className="img img--2">
          <img src={mountain} alt="image-2"/>
          <span>This is slide two</span>
        </div>
      )}
      {currentImageNumber === 3 && (
        <div className="img img--3">
          <img src={sphere} alt="image-3"/>
          <span>This is slide three</span>
        </div>
      )}

      <button type="button" className="btn btn--next" onClick={nextHandler}>
        Next
      </button>
      <button type="button" className="btn btn--prev" onClick={prevHandler}>
        Prev
      </button>

      <div className="radio-grp">
        <span className="radio-btn" onClick={goToFirstHandler}></span>
        <span className="radio-btn" onClick={goToSecond}></span>
        <span className="radio-btn" onClick={goToThird}></span>
      </div>
    </section>
  );
};

export default Carousel;

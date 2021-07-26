import React, { useEffect, useState } from 'react';

import '../scss/Carousel.scss';

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
      }, 1000);

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
        <div className="img img--1">This is slide one</div>
      )}
      {currentImageNumber === 2 && (
        <div className="img img--2">This is slide two</div>
      )}
      {currentImageNumber === 3 && (
        <div className="img img--3">This is slide three</div>
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

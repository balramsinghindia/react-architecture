import React from 'react';

import './Carousel.css';

const Carousel = () => {
  return (
    <section className="container">
      <img src={`../assets/carousel-${currentImageNumber}.jpg`} />
      <button type="button" className="btn btn--next">
        Next
      </button>
      <button type="button" className="btn btn--prev">
        Prev
      </button>
    </section>
  );
};

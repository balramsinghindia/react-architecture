import { useState } from "react";
import CarouselComponent from "../../components/Carousel";

export default function Carousel(){
  const carouselData = [
    {
        // image: "../../images/cat.jpg",
        name: "image 1",
    },
    {
        // image: "../../images/mountain.jpg",
        name: "image 2",
    },
    {
        // image: "../../images/sphere1.jpg",
        name: "image 3",
    }
  ];

  return(
    <>              
      <CarouselComponent/>
    </>
  );
}
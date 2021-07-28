import React, { useEffect, useState } from 'react';


export function Carousel(){
    const [currentIndex,setcurrentIndex] = useState(1);
    const[isMouseHovered , setIsMouseHovered] = useState(false);
 useEffect(() => {
      if(!isMouseHovered){
          const interval = setInterval(() => {
            setcurrentIndex((val) => { 
                val++ ; 
                if(val > 3) val = 1;
                return val;
            })
          },2000);
          return function(){
              clearInterval(interval);
          }
      }
      else{

      }
     
 })
  
function showSlideOne(){
    setcurrentIndex(1);
}

function showSlideTwo(){
    setcurrentIndex(2);
}

function showSlideThree(){
    setcurrentIndex(3);
}

function nextSlide(){
    setcurrentIndex((val) => { 
        val++ ; 
        if(val > 3) val = 1;
        return val;
    })
}

function prevslide(){
    setcurrentIndex((val) => {
        val-- ;
        if(val < 1) val = 3;
        return val;
    })
}

function runSlide(){
  setIsMouseHovered(true);
}

function stopSlide(){
    setIsMouseHovered(false);
}

   
    return(
        <>
        <h3>Carousel Component</h3>
        <div  onMouseEnter={runSlide}  onMouseLeave={stopSlide}>
        {currentIndex === 1 && (<div className="slide-one">Slide 1</div>)}
        { currentIndex === 2 && ( <div className="slide-two">Slide 2</div>)}
       { currentIndex === 3 && (  <div className="slide-three">Slide 3</div>)}
      
        {/* <button onClick ={plusSlide(-1)}>Prev</button>
        <button onclick = {plusSlide(+1)}>Next</button> */}
        <button onClick={showSlideOne}>slide-1</button>
        <button onClick={showSlideTwo}>slide-2</button>
        <button onClick={showSlideThree}>slide-3</button>
        <button onClick={ nextSlide}>Next Slide</button>
        <button onClick={prevslide}>Prev Slide</button>
        </div>
        </>
    )
}
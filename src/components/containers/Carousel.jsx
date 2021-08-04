import './../../scss/index.scss';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';
import {useEffect, useState} from 'react';

const Carousel = () => {
    const images = [
        { image : image1},
        { image : image2},
        { image : image3},
        { image : image4},
        { image : image5}
    ]
    const [currentImage , setCurrentImage] = useState(0);
    const [isHovered , setIsHovered] = useState(false);
    const length = 5;
    useEffect(()=>{
        if(!isHovered){
            const interval = setInterval(() => {
                setCurrentImage(currentImage === length-1 ? 0 : currentImage + 1);
            }, 1000);
            return () => {
                clearInterval(interval);
              };
        }

    },[isHovered]);
    const nextSlide = () => {
        setCurrentImage(currentImage === length-1 ? 0 : currentImage + 1);
    }

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length-1 : currentImage -1);
        
    }
    const mouseEnterHandler = () =>{
        setIsHovered(true);
    }
    const mouseLeaveHandler = () =>{
        setIsHovered(false);
    }
    return (
        <section onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}>
            {images.map((image,index)=>{
                return (
                    <div key={index}>
                        {index === currentImage && (<img width="500" src={image.image}/> )}
                    </div>
                )
            })}
            <div>
                <span className="dot" ></span>
                <span className="dot" ></span>
                <span className="dot" ></span>
                <span className="dot" ></span>
                <span className="dot" ></span>
            </div>
            <button onClick={prevSlide}>Prev</button>
            <button onClick={nextSlide}>Next</button>
        </section>
    )
}

export default Carousel;
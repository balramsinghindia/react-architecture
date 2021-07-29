import useState from "react";

export default function Carousel(){
  const carouselData = [
    {
        // image: "../../images/1.jpeg",
        name: "image 1",
    },
    {
        // image: "../../images/2.jpeg",
        name: "image 2",
    },
    {
        // image: "../../images/3.jpeg",
        name: "image 3",
    },
    {
        // image: "../../images/4.jpeg",
        name: "image 4",
    },
    {
        // image: "../../images/5.jpeg",
        name: "image 5",
    },
  ];

  // const [mounted, setMounted] = useState(true);

  // function previous(){
  //   console.log('inside previous');
  // }

  // function next(){
  //   console.log('inside next');
  // }

  let [activeIndex, setActive] = useState(0);

  const activate = (activeIndex) => {
    setActive(activeIndex);
  };

  return(
    <>              
      {carouselData.map((data, index) => (
        // <img key={index} src={data.image} alt="img"></img>
        <h2 
          key={index} 
          className={`${index == activeIndex ? `active` : `inactive`}`}					
        > {data.name} </h2>        
      ))}

      <button onClick={activate}> Prev </button>
      <button onClick={activate}> Next </button>
    </>
  );
}
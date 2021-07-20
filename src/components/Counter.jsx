import { useState } from "react";


const Counter = ({increment, decrement, counter}) => {  

  return(
    <>        
        <button onClick={increment}> Increase </button>
        <button onClick={decrement}> Decrease </button>
        <p> {counter} </p>
    </>
  )
}

export default Counter;
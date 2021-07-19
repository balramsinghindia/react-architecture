import { useState } from "react";

// let count = count;

const Counter = () => {
  // {increment, decrement}
  const [counter, setCounter] = useState(0);  

  return(
    <div>
        <button onClick={()=>setCounter(counter+1)}> Increase </button>
        <button onClick={()=>setCounter(counter-1)}> Decrease </button>
        <p> {counter} </p>
    </div>
  )
}

export default Counter;
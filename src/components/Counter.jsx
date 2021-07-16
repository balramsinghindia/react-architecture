import { useState } from 'react';

const Counter = ({increaseCounter, decreaseCounter}) =>{

    return(
        <>
        <h3>Increase count from counter component</h3>
        <button onClick={increaseCounter}>Increase Count</button>
        <button onClick={decreaseCounter}>Decrease Count</button>
        </>
    )
} 

export default Counter;
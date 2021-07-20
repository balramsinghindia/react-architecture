import {useState} from 'react';

export function Counter({increment, decrement, reset, counter}){
    return(
        <>
            <h3>counter component</h3>
            <button onClick={increment}>Increment Counter</button>
            <button onClick={decrement}>Decrement Counter</button>
            <button onClick={reset}>Reset Counter</button>

            Value of count is {counter}
            
       </>
    )
};
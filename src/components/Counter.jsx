import {useState} from 'react';

export function Counter(props){
 console.log(props.counter);
 
 
    return(
        <>
       <h3>counter component</h3>
       <button onClick={ props.increment}>Increment Counter</button>
       <button onClick={props.decrement}>Decrement Counter</button>
       <button onClick={props.reset}>Reset Counter</button>

       {"Value of count is "}{props.counter}
       </>
    )
};
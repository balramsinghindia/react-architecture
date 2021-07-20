import { useState, createContext } from "react";

export const CounterContext = createContext();

function CounterContextProvider(props) {

    const [counter, setCounter]= useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
 
    function userLogin(){
        setIsLoggedIn(true);
        setIsHidden(true);
    }
  
    function increment(){
        setCounter(counter + 1);
    }

    function decrement(){
        setCounter(counter - 1);
    }

    function reset(){
        setCounter(0);
    }
    const value = { counter, increment, decrement, reset, isLoggedIn, isHidden, userLogin }

    return(
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;

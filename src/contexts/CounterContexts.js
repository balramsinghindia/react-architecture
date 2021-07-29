import { useState, createContext } from 'react';

export const CounterContext = createContext();

function CounterContextProvider(props) {
  const [counter, setCounter] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }
  const value = {
    counter,
    increment,
    decrement,
    reset,
    isLoggedIn,
    loginHandler,
  };

  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;

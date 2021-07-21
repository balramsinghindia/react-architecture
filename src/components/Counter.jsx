import { useState, useContext } from 'react';
import { CounterContext } from '../contexts/CounterContexts';

export function Counter() {
  const { counter, increment, decrement, reset, isLoggedIn } =
    useContext(CounterContext);

  return (
    <>
      <h3>counter component</h3>
      {isLoggedIn && <button onClick={increment}>Increment Counter</button>}
      {isLoggedIn && <button onClick={decrement}>Decrement Counter</button>}
      <button onClick={reset}>Reset Counter</button>
      Value of count is {counter}
    </>
  );
}

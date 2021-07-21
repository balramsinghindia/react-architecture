import { useContext, useState } from 'react';
import { Footer } from './Footer';
import Recipe from './Recipe';
import './../scss/index.scss';
import { Counter } from './Counter';
import CounterContextProvider, {
  CounterContext,
} from '../contexts/CounterContexts';

const App = () => {
  const { loginHandler, isLoggedIn } = useContext(CounterContext);

  return (
    <>
      <h1> Oh hello, This is first React component </h1>
      <main>
        {!isLoggedIn && <button onClick={loginHandler}>Login</button>}

        <section className="hero">
          <Recipe />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;

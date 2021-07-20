import Recipe from './Recipe';
// import Footer from './Footer';
import Counter from './Counter';
import { useState } from "react";
import './../scss/index.scss';

const App = () => {
  const [counter, setCounter] = useState(0); 
  
  function incrementCounter(){
    setCounter(counter+1);
  }

  function decrementCounter(){
    setCounter(counter-1);
  }

    return (
        <>
            <h1> Oh hello, This is first React component </h1>
            <main>
                <section className="hero">
                    <Recipe
                        text="Hello, i am Recipe React component from Props"
                        increment={incrementCounter}
                        decrement={decrementCounter}
                        counter={counter}
                    />
                    <Counter 
                        increment={incrementCounter}
                        decrement={decrementCounter}
                        counter={counter}
                    />                    
                </section>
            </main>
            {/* <Footer copyrightText="Copyright@2021" /> */}
        </>
    )
}

export default App;

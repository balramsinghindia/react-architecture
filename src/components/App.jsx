import Recipe from './Recipe';
import { Footer } from './Footer';
import './../scss/index.scss';
import { Counter } from './Counter';
import {useState} from 'react';

const App = () => {
    const [counter,setCounter]= useState(0);
  
    function increment(){
        setCounter(counter + 1);
    }

    function decrement(){
        setCounter(counter - 1);
    }

    function reset(){
        setCounter(0);
    }
    return (
        <>
            <h1> Oh hello, This is first React component </h1>
            <main>
                <section className="hero">
                    <Recipe
                        text="Hello, i am Recipe React component from Props"
                        counter={counter}
                        increment={increment}
                        decrement= {decrement}
                        reset = {reset}
                    />
                </section>
            </main>
                        <Footer copyrightText="Copyright@2021" />
                        <Counter
                        counter={counter}
                        increment={increment}
                        decrement={decrement}
                        reset = {reset}
             />
        </>
    )
}

export default App;

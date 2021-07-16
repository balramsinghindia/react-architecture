import Recipe from './Recipe';
import '../scss/index.scss';
import Footer from './Footer';
import Counter from './Counter';
import { useState } from 'react';

const App = () => {
    const [ getCount, setGetCount ] = useState(0);

    const countPlus = () =>{
        setGetCount( getCount + 1);
    }

    const countMinus = () =>{
        setGetCount( getCount - 1);
    }
    
    return (
        <>
            <h1> Oh hello, This is first React component </h1>
            <main>
                <section className="hero">
                    <h1>This is count : {getCount}</h1>
                    <Recipe increaseCount={countPlus} decreaseCount={countMinus} />
                </section>
            </main>
            <Counter increaseCounter={countPlus} decreaseCounter={countMinus}/>
            <Footer/>
        </>
    )
}

export default App;

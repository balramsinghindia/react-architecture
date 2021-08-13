import { useState, useContext } from "react";
import { CounterContext } from '../contexts/CounterContexts';

let technologies = {
    frontend: ['js', 'css', 'html', 'typescript'],
    backend: ['java', 'php']
}

let receipe = {
    ...technologies,
    leather: 1,
    refined: 'hello',
    welcome: true
}

const Recipe = () => {
    const [abc, setAbc] = useState({});
    const { increment, decrement, reset } = useContext(CounterContext);
    return (
        <>
            <h3>Current Recipe:</h3>
            <button onClick={()=>setAbc(technologies)}>Recipes</button>
            <button onClick={()=>setAbc(receipe)}>Technologies</button>
            <ul>
                { Object.keys(abc).map((material) => <li>{material}: {abc[material]}</li> )}
            </ul>
            
            <button onClick={increment}>RecipeIncrement</button>
            <button onClick={decrement}>RecipeDecrement</button>
            <button onClick={reset}>RecipeReset</button>
        </>
    )
}

export default Recipe;

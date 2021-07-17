import { useState } from "react";
import { Counter } from "./Counter";

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

const Recipe = (props) => {
    const [abc, setAbc] = useState({});
    // const [countValue, setCountValue] = useState(0);
    // console.log(countValue);
    return (
        <div>
            {/* {text} */}
            <h3>Current Recipe:</h3>
            <button onClick={()=>setAbc(technologies)}>Recipes</button>
            <button onClick={()=>setAbc(receipe)}>Technologies</button>
            <ul>
                { Object.keys(abc).map((material) => <li>{material}: {abc[material]}</li> )}
            </ul>
            {/* <Header /> */}
            <button onClick={props.increment}>RecipeIncrement</button>
            <button onClick={props.decrement}>RecipeDecrement</button>
            <button onClick={props.reset}>RecipeReset</button>
            
        </div>
    )
}

export default Recipe;

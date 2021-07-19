import { useState } from "react";

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

const Recipe = ({text}) => {
    const [abc, setAbc] = useState({});

    return (
        <div>
            {text}
            <h3>Current Recipe:</h3>
            <button onClick={()=>setAbc(technologies)}>Recipes</button>
            <button onClick={()=>setAbc(receipe)}>Technologies</button>
            <ul>
                { Object.keys(abc).map((material) => <li>{material}: {abc[material]}</li> )}
            </ul>
            <Header />
            
        </div>
    )
}

export default Recipe;

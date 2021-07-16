import { useState } from 'react';
const Recipe = ({increaseCount,decreaseCount }) => {
    return (
        <>
            <div>
                Hello, i am Recipe React component
            </div>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
        </>
    )
}

export default Recipe;


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

console.log(technologies);
console.log(receipe);

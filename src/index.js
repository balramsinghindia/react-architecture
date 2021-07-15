import { render } from 'react-dom';
import './scss/index.scss';

render(<h1>Welcome in React world</h1>, document.getElementById("root"));

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

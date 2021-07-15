const Recipe = () => {
    return (
        <div>
            Hello, i am Recipe React component
        </div>
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

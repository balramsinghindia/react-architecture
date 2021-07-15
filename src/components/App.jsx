import Recipe from './Recipe';
import './../scss/index.scss';

const App = () => {
    return (
        <>
            <h1> Oh hello, This is first React component </h1>
            <main>
                <section className="hero">
                    <Recipe />
                </section>
            </main>
        </>
    )
}

export default App;

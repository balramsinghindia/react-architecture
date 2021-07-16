import Recipe from './Recipe';
import { Footer } from './Footer';
import './../scss/index.scss';

const App = () => {
    return (
        <>
            <h1> Oh hello, This is first React component </h1>
            <main>
                <section className="hero">
                    <Recipe
                        text="Hello, i am Recipe React component from Props"
                    />
                </section>
            </main>
            <Footer copyrightText="Copyright@2021" />
        </>
    )
}

export default App;

import Recipe from './Recipe';
import '../scss/index.scss';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <h1> Oh hello, This is first React component </h1>
            <main>
                <section className="hero">
                    <Recipe />
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App;

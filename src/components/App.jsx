import Recipe from './Recipe';
import './../scss/index.scss';
import Footer from './Footer';
import Carousel from './Carousel';
import Form from './Form';


const App = () => {
    return (
        <>
            <h1> Oh hello, This is first React component </h1>
            <main>
                <section className="hero">
                    <Recipe />
                    <Carousel/>
                </section>
            </main>
            <Form/>
            <Footer/>
        </>
    )
}

export default App;

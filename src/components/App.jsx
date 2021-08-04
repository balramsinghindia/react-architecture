import Recipe from './containers/Recipe';
import '../scss/index.scss';
import Footer from './containers/Footer';
import Carousel from './containers/Carousel';
import Form from './molecules/Form';


const App = () => {
    return (
        <>
            <h1> Oh hello, This is first React component </h1>
            <main>
                <section className="hero">
                    <Recipe />
                    {/* <Carousel/>  */}
                </section>
            </main>
            <Form/>
            <Footer/>
        </>
    )
}

export default App;

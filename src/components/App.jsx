import Recipe from './Recipe';
// import Footer from './Footer';
import Counter from './Counter';
import './../scss/index.scss';

const App = () => {
//   const [counter, setCounter] = useState(0);  

    return (
        <>
            <h1> Oh hello, This is first React component </h1>
            <main>
                <section className="hero">
                    <Recipe
                        text="Hello, i am Recipe React component from Props"
                    />
                    <Counter />
                    {/* data={(counter+1), (counter+2)} */}
                </section>
            </main>
            {/* <Footer copyrightText="Copyright@2021" /> */}
        </>
    )
}

export default App;

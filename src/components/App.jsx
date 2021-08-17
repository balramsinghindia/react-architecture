import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'; 
import { useCallback } from 'react';
import { Footer } from './Footer';
import './../scss/index.scss';
import { Counter } from './Counter';
import CounterContextProvider from'../contexts/CounterContexts';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './Header';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import Carousel from './pages/Carousel';
import Form from './molecules/Form';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Reducer } from './redux/Reducer';

const App = () => {    

    const store = createStore(Reducer);
    return (
        <BrowserRouter>
            <CounterContextProvider>
                {/* <h1> Oh hello, This is first React component </h1>
                <main>
                    <section className="hero">
                        <Recipe
                            text="Hello, i am Recipe React component from Props"
                        />
                    </section>
                </main>
                <Counter/> */}

                <Header />

                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/about' component={About} />
                    <Route path='/profile' component={Profile} />
                    
                    <Route path='/post/:id' component={Post} />
                    <Route path='/carousel' component={Carousel} />
                    <Provider store={store}>
                    <Route path='/form' component={Form}/>
                    </Provider>
                    <Route component={NotFound} />
                </Switch> 
                
                
                <Footer copyrightText="Copyright@2021" />
                


            </CounterContextProvider>
        </BrowserRouter>
    )
}

export default App;

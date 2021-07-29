import { useEffect } from "react";
import cat from '../../images/cat.jpg';

export default function Home(){
    useEffect(()=> {
        window.scroll(0, 0);
    }, []);
    return (
        <>
            <h3>Home Page</h3>
            <div className="home">
                hello i am home
                <div className="mountain"></div>
                <img src={cat} alt="cat" title="Cat" width="500" />
            </div>
        </>
    );  
};


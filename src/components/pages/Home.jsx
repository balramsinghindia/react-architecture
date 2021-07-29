import { useEffect } from "react";
import cat from '../../images/cat.jpg';
import sphere1 from '../../images/sphere1.jpg';

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
                <img src={sphere1} alt="small" title="small" width="500" />
            </div>
        </>
    );  
};


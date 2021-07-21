import { useEffect } from "react";


export default function About(){
    useEffect(()=> {
        window.scroll(0, 0);
    }, []);
    
    return (
        <>
            <h3>About Page</h3>
            <div className="about">
                hello i am about
            </div>
        </>
    );  
};


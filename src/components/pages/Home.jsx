import { useEffect } from "react";

export default function Home(){
    useEffect(()=> {
        window.scroll(0, 0);
    }, []);
    return (
        <>
            <h3>Home Page</h3>
            <div className="home">
                hello i am home
            </div>
        </>
    );  
};


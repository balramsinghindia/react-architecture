import { useEffect } from "react";

export default function Home({match}){
    useEffect(()=> {
        window.scroll(0, 0);
    }, []);
    console.log(match);
    return (
        <>
            <h3>Home Page</h3>
            <div className="home">
                hello i am home
            </div>
        </>
    );  
};


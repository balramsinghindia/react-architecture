import { useEffect } from "react";

export default function Home(){
    useEffect(()=> {
        window.scroll(0, 0);
    }, []);
    return (
        <>
            <h3>404 Page</h3>
            <div className="not-found">
                hello i am Not found
            </div>
        </>
    );  
};


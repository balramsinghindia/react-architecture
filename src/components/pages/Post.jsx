import { useEffect } from "react";


export default function Post(){
    useEffect(()=> {
        window.scroll(0, 0);
    }, []);
    
    return (
        <>
            <h3>Post Page</h3>
            <div className="post">
                hello i am post
            </div>
        </>
    );  
};


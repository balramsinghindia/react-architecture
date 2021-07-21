import { useEffect } from "react";
import { useParams, useLocation } from "react-router";

export default function Post(){
    useEffect(()=> {
        window.scroll(0, 0);
    }, []);
    const { id } = useParams();
    
    return (
        <>
            <h3>Post Page {id}</h3>
            <div className="post">
                hello i am post
            </div>
        </>
    );  
};


import { useEffect } from "react";
import { useParams, useHistory } from "react-router";

export default function Post(){

    const history = useHistory();
    useEffect(()=> {
        window.scroll(0, 0);

        if(true){
            history.push('/')
        }
    }, [history]);
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


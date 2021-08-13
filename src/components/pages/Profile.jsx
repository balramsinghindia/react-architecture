import { useEffect } from "react";
import { useSelector } from "react-redux";


export default function Profile(){

    const counter = useSelector(state => state);


    useEffect(()=> {
        window.scroll(0, 0);
    }, []);
    return (
        <>

            {counter.marks && counter.marks.response && counter.marks.response.english}
            <h3>profile Page</h3>
            <div className="profile">
                hello i am profile
            </div>
        </>
    );  
};


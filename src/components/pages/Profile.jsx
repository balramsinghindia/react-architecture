import { useEffect } from "react";

export default function Profile(){
    useEffect(()=> {
        window.scroll(0, 0);
    }, []);
    return (
        <>
            <h3>profile Page</h3>
            <div className="profile">
                hello i am profile
            </div>
        </>
    );  
};


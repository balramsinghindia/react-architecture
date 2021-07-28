import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

export const Contact = () => {

    let history = useHistory();
    const { id } = useParams();

    function handlerBack(){
        history.push('/profile');
    }
    return(
        <>
           <h3>contact us mail : www.abc.com </h3>
           <button onClick={handlerBack}>Back To Profile</button>
           <h3>useParams value is<span className="param"> {id}</span></h3>
        </>   
    )
}
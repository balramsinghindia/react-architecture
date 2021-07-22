import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

export const Contact = () => {

    let history = useHistory();

    function handlerBack(){
        history.push('/profile');
    }

    const { id } = useParams();
    console.log(id);

    return(
        <>
           <h3>contact us mail : www.abc.com </h3>
           <button onClick={handlerBack}>Back To Profile</button>
           <h3>useParams value is{id}</h3>
        </>   

    )
}
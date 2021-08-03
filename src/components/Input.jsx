import './../scss/index.scss';
import {useEffect, useState} from 'react';

const Input =  ({label,inputType,inputName,regex}) => {
    const [error , setError] = useState('');
    function handleChange(e) {
        const {name , value } = e.target;
        if(!(regex.test(value)))
            setError(`Invalid ${name}`);
        else
            setError('');
    }
    return (
        <div>
            <label>{label}</label>
            <input type={inputType} name={inputName} onBlur={handleChange}/>
            <div className="error">
                {error}
            </div>
        </div> 
    )
}

export default Input;
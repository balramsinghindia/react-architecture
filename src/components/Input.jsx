import './../scss/index.scss';
import {useEffect, useState} from 'react';
import { validateInput } from './Validator';

const Input =  ({label,inputType,inputName,validator, handleChange}) => {
    const [error , setError] = useState('');
    function handleInputChange(e) {
        const { value } = e.target;
        const validation = validateInput(value, validator);
        setError(validation);        
    }

   

    return (
        <div>
            <label>{label}</label>
            <input
                type={inputType}
                name={inputName}
                onBlur={handleInputChange}
            />
            <div className="error">
                {error}
            </div>
        </div> 
    )
}

export default Input;
import './../../scss/index.scss';
import {useEffect, useState} from 'react';
import { validateInput } from '../utilities/Validator';

const Input =  ({label,inputType,inputName,validator,defaultValue, handleChange}) => {
    const [error , setError] = useState('');
    function handleInputChange(e) {
        const { value } = e.target;
        const validation = validateInput(value, validator);
        handleChange(inputName,value);
        setError(validation);        
    }

   

    return (
        <div>
            <label>{label}</label>
            <input
                defaultValue={defaultValue}
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
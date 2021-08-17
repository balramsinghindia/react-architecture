import './../../scss/index.scss';
import {useEffect, useState} from 'react';
import { validateInput } from '../utilities/Validator';

import { useSelector } from 'react-redux';

const Input =  ({label,inputType,inputName,validator, handleChange,inputOnChange}) => {
    const inputState = useSelector((state) => state);
    console.log(inputState); // redux state information


    const [error , setError] = useState('');
    function handleInputChange(e) {
        const { value } = e.target;
        const validation = validateInput(value, validator);
        setError(validation);        
    }
    const style = {
        margin : 20
    }
   
    return (
        <div style={style}>
            <label>{label}</label>
            <input
                type={inputType}
                name={inputName}
                value={inputState.value}
                onChange={inputOnChange}
                onBlur={handleInputChange}
            />
            <div className="error">
                {error}
            </div>
        </div> 
    )
}

export default Input;
import './../scss/index.scss';
import {useEffect, useState} from 'react';

const Input =  ({label,inputType,inputName,validator, handleChange}) => {
    const [error , setError] = useState('');
    function handleInputChange(e) {
        const {name , value } = e.target;
        if(validator[0].check[0]==='regex'){
            if(!(validator[0].check[1].test(value))) {
                setError(validator[0].message);
            } else {
                setError('');
                handleChange(value)
            }
        }
    }
    return (
        <div>
            <label>{label}</label>
            <input type={inputType} name={inputName} onBlur={handleInputChange}/>
            <div className="error">
                {error}
            </div>
        </div> 
    )
}

export default Input;
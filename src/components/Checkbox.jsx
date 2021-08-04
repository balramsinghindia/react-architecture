import React, { useState } from 'react';
import { validateInput } from '../../src/components/utilities/Validator';

export function Checkbox({inputName,inputId,labelValue,onChange,validator},props){
    const [error , setError] = useState('');
    function handleCheckbox(e){
      const value  = e.target.checked;
      const validation = validateInput(value,validator);
      setError(validation);
    }

    const style = {
        margin : 20
    }
    return(
         <div style={style}>
         <input type='checkbox' name={inputName} id={inputId}  onchange={handleCheckbox} onBlur={handleCheckbox}/>
        <label htmlFor={inputId}>{labelValue}</label>
        <div className="error">
            {error}
        </div>
         </div>
    )}

    Checkbox.defaultProps = {
        inputName : 'empty',
        inputId : 'empty',
        labelValue : 'Agree with terms & conditions'
    }
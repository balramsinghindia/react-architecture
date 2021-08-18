import './../../scss/index.scss';
import {useEffect, useState} from 'react';
import { validateInput } from '../utilities/Validator';

const DropDown = ({values,label,inputName,validator,handleChange,defaultValue}) =>{
    const [error , setError] = useState('');
    // var selectValues = [{id:'0',value:'Select :'}];
    const [isLoading, setLoading] = useState(true);
    useEffect(()=>{
        // selectValues = {...selectValues,...values};
        setLoading(false);
    },[values]);

    function handleDropDownChange(e){
        const {value} = e.target;
        const validation = validateInput(value, validator);
        setError(validation); 
        handleChange(inputName,values[value-1].value);
    }
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <>
            <label>{label}</label>
            <select name={inputName} onChange={handleDropDownChange}>
                        {values.map((value)=>{
                            return (<option key={value.id} value={value.id}>{value.value}</option>)
                        })}
            </select>
            <div className="error">
                {error}
            </div>
        </>
    )
}
export default DropDown;
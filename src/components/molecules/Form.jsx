import './../../scss/index.scss';
import {useEffect, useState} from 'react';
import Input from '../atom/Input';
import DropDown from '../atom/DropDown';
import { Checkbox } from '../Checkbox';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Form = () => {

    const formState = useSelector((state) => state);

    const dispatch = useDispatch();

    var cities = ['Indore','Bhopal','Jaipur','Lucknow','Ahemdabad','Pune','Mumbai','Washington','LA','San Francisco','Columbus'];
    var States = ['Uttar Pradesh','Madhaya Pradesh','Maharashtra','Gujarat','Rajasthan','Washington DC','Ohio','California'];
    var Countries = ['India','USA'];
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\d+$/;
    const  nameRegex = /[a-zA-z]{1,30}/;

    function handleChange(value){
        console.log("value", value);
    }

    function handleCheckboxChange(value){
        console.log('value',value)
    }
    const style = {
        background : "azure",
    }
    const legendStyle = {
        fontWeight:700 
    }
    // sending back to redux store
    function InputOnChange(event){
        console.log(event.target.value);
       return dispatch( { type: 'initialState', data: event.target.value});
    }

   
    
     return (
        <>
            <h1>Form</h1>
            <h3>Prakash Forms</h3>
            <form style={style} >
                <fieldset>
                    <legend style={legendStyle}>React atomic form pattern</legend>
                    <Input 
                    inputType="text" 
                    inputName="name" 
                    label="Name: "
                    validator={[
                        {
                            check: ['required'],
                            message: 'Name field can\'t be emtpy'
                        },
                        {
                            check: ['regex', nameRegex],
                            message: "Regex custom message for name"
                        },
                        {
                            check: ['maxLength', 20],
                            message: "Name should be less than 20 characters"
                        }
                    ]}
                    inputOnChange={InputOnChange}
                    handleChange={handleChange}
                    />
                    <Checkbox 
                    inputName="checkbox"
                    inputId="checkbox"
                    validator={[
                        {
                            check : ['required'],
                            message : 'Checkbox is Mandatory'
                        }
                    ]}
                    onChange={handleCheckboxChange}
                    />
                    {/* <Input 
                    inputType="Email" 
                    inputName="email" 
                    label="Email: " 
                    regex= {emailRegex}
                    handleChange={handleChange}
                    />

                    <Input inputType="Number" 
                    inputName="phone" 
                    label="Phone: " 
                    regex = {phoneRegex}
                    handleChange={handleChange}
                    /> */}
                    {/* <DropDown
                    value={cities}
                    label="City :"
                    /> 
                    
                    <DropDown
                    value={States}
                    label="State :"
                    /> 
                    <DropDown
                    value={Countries}
                    label="Country :"
                    />               
                           
                {/* <label>
                    Gender : 
                    <label>Male</label>
                    <input type="Radio" name="gender" value="Male"  required />
                    <label>Female</label>
                    <input type="Radio" name="gender" value="Female"  required/>
                </label>
                <label>
                    Terms & Condition : 
                    <input type="checkbox" name="tnc"  required/>
                </label> */} 
              
                </fieldset>
            </form>
        </>
    )
}

export default Form;
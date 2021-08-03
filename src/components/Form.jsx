import './../scss/index.scss';
import {useEffect, useState} from 'react';
import Input from './Input';
import DropDown from './DropDown';


const Form = () => {
    var cities = ['Indore','Bhopal','Jaipur','Lucknow','Ahemdabad','Pune','Mumbai','Washington','LA','San Francisco','Columbus'];
    var States = ['Uttar Pradesh','Madhaya Pradesh','Maharashtra','Gujarat','Rajasthan','Washington DC','Ohio','California'];
    var Countries = ['India','USA'];
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\d+$/;
    const  nameRegex = /[a-zA-z]{1,30}/;
    
     return (
        <>
            <h1>Form</h1>
            <form>
                    <Input 
                    inputType="text" 
                    inputName="name" 
                    label="Name: "
                    regex ={nameRegex}
                    />

                    <Input 
                    inputType="Email" 
                    inputName="email" 
                    label="Email: " 
                    regex= {emailRegex}
                    />

                    <Input inputType="Number" 
                    inputName="phone" 
                    label="Phone: " 
                    regex = {phoneRegex}
                    />
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
                {/* <input type="submit" value="Submit"/> */}
            </form>
        </>
    )
}

export default Form;
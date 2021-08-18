import './../../scss/index.scss';
import {useEffect, useState} from 'react';
import Input from '../atom/Input';
import DropDown from '../atom/DropDown';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Form = () => {

    const user = useSelector(state => state);
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    console.log('store',user);
    var cities = [
        {
        id:1,
        value:'Indore'
        },{
        id:2,
        value:'Jaipur'
        },{
        id:3,
        value:'Lucknow'
        },
        {
        id:4,
        value:'Ahemdabad'
        },{
        id:5,
        value:'Pune'
        },{
        id:6,
        value:'Mumbai'
        },
        {
        id:7,
        value:'Washington'
        },{
        id:8,
        value:'LA'
        },{
        id:9,
        value:'San Francisco'
        },
        {
            id:10,
            value:'Columbus'
        }
    ]
    var States = ['Uttar Pradesh','Madhaya Pradesh','Maharashtra','Gujarat','Rajasthan','Washington DC','Ohio','California'];
    var Countries = ['India','USA'];
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\d+$/;
    const  nameRegex = /[a-zA-z]{1,30}/;

    // const  [user , setUser] = useState({});
    

    function handleChange(field,value){
        if(value!=null){
            dispatch({
                type: field,
                data: value
            })
            // var obj = {};
            // obj[field] = value;
            setData(data => ({
                ...data,
                [field] : value,
              }))
             
            // setData({...data,'city':value});
            // data[field] = value;
        }
       
    }
    

     return (
        <>
            <h1>Form</h1>
            <form>
                    <Input 
                    defaultValue={user.name}
                    inputType="text" 
                    inputName="name" 
                    label="Name: "
                    validator={[
                        {
                            check: ['required'],
                            message: 'Name field can\'t be empty'
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
                    handleChange={handleChange}
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
                    <DropDown
                    values={cities}
                    inputName="city"
                    label="City :"
                    validator={[
                        {
                            check: ['required'],
                            message: 'Name field can\'t be empty'
                        },
                    ]}
                    handleChange={handleChange}
                    defaultValue={user.city}
                    /> 
                    {/*  
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
                {/* <input type="submit" value="Submit" onClick={handleSubmit}/> */}
            </form>
        </>
    )
}

export default Form;
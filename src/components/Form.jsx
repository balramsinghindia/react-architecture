import './../scss/index.scss';
import {useEffect, useState} from 'react';
import {
    nameCheck,
    emailCheck,
    phoneCheck,
} from '../Validation';


const Form = () => {
    var cities = ['Indore','Bhopal','Jaipur','Lucknow','Ahemdabad','Pune','Mumbai','Washington','LA','San Francisco','Columbus'];
    var States = ['Uttar Pradesh','Madhaya Pradesh','Maharashtra','Gujarat','Rajasthan','Washington DC','Ohio','California'];
    var Countries = ['India','USA'];
    const  [user , setUser] = useState({});
    function handleChange(e) {
        const {name , value } = e.target;
        switch (name){
            case 'name':
                if(nameCheck(value))
                    setUser({...user , name:value});
                else
                    console.log('Name is invalid');
                break;
            case 'email':
                if(emailCheck(value))
                    setUser({...user , email:value});
                else
                    console.log('Email invalid');
                break;
            case 'phone':
                if(phoneCheck(value))
                    setUser({...user , phone:value});
                else
                    console.log('invalid Phone');
                break;
            case 'city':
                setUser({...user , city:value});
                break;  
            case 'country':
                setUser({...user , country:value});
                break;
            case 'state':
                setUser({...user , state:value});
                break;
            case 'gender':
                setUser({...user , gender:value});
                break;
            case 'tnc':
                setUser({...user , tnc:value});
                break;  
            default:
                break;        
        }
    }
    console.log(user);
     return (
        <>
            <h1>Form</h1>
            <form>
                <label>
                    Name : 
                    <input type="text" name="name" onBlur={handleChange}/>
                </label>
                <label>
                    Email : 
                    <input type="Email" name="email" onBlur={handleChange}/>
                </label>            
                <label>
                    Phone : 
                    <input type="number" name="phone" onBlur={handleChange}/>
                </label> 
                          
                <label>
                    City : 
                    <select name="city" onBlur={handleChange}>
                        {cities.map((city,index)=>{
                            return (<option key={index}>{city}</option>)
                        })}
                    </select>
                </label>             
                <label>
                    State : 
                    <select name="state" onBlur={handleChange}>
                        {States.map((state,index)=>{
                            return <option key={index}>{state}</option>
                        })}
                    </select>
                </label>            
                <label>
                    Country : 
                    <select name="country" onBlur={handleChange}>
                        {Countries.map((country,index)=>{
                            return <option key={index}>{country}</option>

                        })}
                    </select>
                </label>            
                <label>
                    Gender : 
                    <label>Male</label>
                    <input type="Radio" name="gender" value="Male" onBlur={handleChange} required />
                    <label>Female</label>
                    <input type="Radio" name="gender" value="Female" onBlur={handleChange} required/>
                </label>
                <label>
                    Terms & Condition : 
                    <input type="checkbox" name="tnc" onBlur={handleChange} required/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default Form;
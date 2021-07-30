import { useState } from 'react';

// const useForm = (initialValues) => {
//     const [inputs,setInputs] = useState(initialValues);
//     const handleSubmit = (event) => {
//       if(event){
//         event.preventDefault();
//       }
//       console.log(inputs);
//     }
//     const handleInputChange = (event) => {
//       event.persist();
//     //   setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
//     console.log(inputs);
//       }
//     return {
//       handleSubmit,
//      handleInputChange,
//      inputs
//       };
// }

// const validate = (inputs) => {
// const errors = {};
// if (!inputs.email) {
//     errors.email = 'Email required';
// } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
// ) {
//     errors.email = 'Invalid email address';
// }
// if(!inputs.fullName  || inputs.fullName.length<1 || inputs.fullName.length > 30){
//     errors.fullName = 'Enter a valid Name'
// }
// return errors;
// }

export default function FormComponent(){
    const cities = ['Delhi', 'Mumbai', 'Banlagore', 'Hyderabad', 'Chennai', 'Kolkata','Beijing', 'Hongkong', 'Newyork', 'Boston','Carlifornia', 'Florida'];
    const statesName = ['Karnataka', 'Tamil Nadu', 'Andrapradesh', 'Rajasthan', 'Gujarat', 'Uttrapadesh', 'Manipur','Meghalaya','Assam','Nagaland', 'Sikim','West bangal','Orissa','Maharastra'];
    const countryNames = ['India', 'United States of America', 'Canada', 'England', 'Russia', 'France', 'Japan', 'China', 'United Arab of Emirates', 'Singapore','Malaysia'];
    
    const {inputs, handleInputChange, handleSubmit, errors} = useForm({fullName: null,email:null,phoneNumber: null});
    
    
    return(
        <>
        <h1>Please Fill this form</h1>
        <form>
            <div className="fields">
                <label htmlFor="fullName" className="input-labels">Name :</label>
                <input id="fullName" type="text" name="fullName" className="input-fields" onChange={handleInputChange} value={inputs.fullName} placeholder="Please enter your name" />
                {/* {errors.fullName && <p>errors.fullName</p>} */}
            </div>
            <div className="fields">
                <label htmlFor="email" className="input-labels">Email :</label>
                <input id="email" type="text" name="email" className="input-fields" placeholder="Please enter your email"  />
                {/* {errors.email && <p>errors.email</p>} */}
            </div>
            <div className="fields">
                <label htmlFor="phone" className="input-labels">Phone :</label>
                <input id="phone" type="tel" name="phoneNumber" className="input-fields" placeholder="Please enter your phone number"/>
            </div>
            <div className="dropdowns">
                <label htmlFor="city" className="input-labels">Select City</label>
                <select name="city" id="city">
                    
                {cities.map((cityName,index)=>(
                    <option key={index}>
                        {cityName}
                    </option>
                ))}
                </select>
            </div>
            <div className="dropdowns">
                <label htmlFor="state" className="input-labels">Select State</label>
                <select name="state" id="state">
                    
                {statesName.map((statesList,index)=>(
                    <option key={index}>
                        {statesList}
                    </option>
                ))}
                </select>
            </div>
            <div className="dropdowns">
                <label htmlFor="country" className="input-labels">Select Country</label>
                <select name="country" id="country">
                    
                {countryNames.map((countryList,index)=>(
                    <option key={index}>
                        {countryList}
                    </option>
                ))}
                </select>
            </div>
            <div className="radio-input">
                <span>Please select gender: </span>
                <label htmlFor="male" className="labels">Male</label>
                <input type="radio" name="gender" value="value-1" id='male' className="gender-options"/>
                <label htmlFor="female" className="labels">Female</label>
                <input type="radio" name="gender" value="value-2" id='female' className="gender-options"/>
            </div>
            <div className="checkbox-input">
                <input type="checkbox" id="terms-condition" name="terms" className="checkbox"/>
                <label htmlFor="terms-condition" className="labels">By clicking here you accept the terms and condition.</label>
            </div>
            <div className="submit">
            <button id="submit">
                Submit
            </button>
            </div>
        </form>
        </>
    )
}
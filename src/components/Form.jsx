import React, { useEffect } from 'react';

export function MyForm(){

    // function validateForm(){

    // }
 
    useEffect(() => {
       validateName();
    })

    function validateName(){
        let getInputValue = document.getElementById('name').value;

        if(getInputValue){

        document.getElementById('err-one').innerHTML="";
        document.getElementById('name').style.borderColor="";

             for(let i=0 ; i < getInputValue.length ; i++) {
                if((getInputValue[i]<'A'||getInputValue[i]>'Z') && (getInputValue[i]<'a'||getInputValue[i]>'z')){
                    document.getElementById('err-one').innerHTML="FirstName should contain only characters";
                    document.getElementById('name').style.borderColor="red";
                }
            }
            if((getInputValue.length > 30)  ) {
                 document.getElementById('err-one').innerHTML="First-Name should be within 30 characters only";  
                 document.getElementById('name').style.borderColor="red";
                console.log("First-Name should be within 24 characters only");
            }
        }

        else {
            document.getElementById('err-one').innerHTML="Name cannot be empty";  
            document.getElementById('name').style.borderColor="red";
        }
    }

    function validateEmail(){
        var getInputValue=document.getElementById('email').value;
        let getInputValueString=getInputValue.toString();

        if(getInputValue.length > 0)
        {
            document.getElementById('err-three').innerHTML="";
            document.getElementById('email').style.borderColor="";

        if( !(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(getInputValueString))){
            console.log('email is validated'); 
            document.getElementById('err-three').innerHTML="Please Enter a valid Email-address";
            document.getElementById('email').style.borderColor="red";

        }
     }
     else{
        document.getElementById('err-three').innerHTML="Please Enter an Email-address";
        document.getElementById('email').style.borderColor="red";
     }
    }

//     function validatePhone(){

//         let getInputValue=document.getElementById('phone').value.toString();
//         if(getInputValue.length > 0){

//             document.getElementById('err-four').innerHTML="";
//             document.getElementById('phone').style.borderColor="";

//             if( !(/^\d+$/.test(getInputValue)))
//             {
//                 document.getElementById('err-four').innerHTML="Enter a Valid Phone Number";
//                 document.getElementById('phone').style.borderColor="red";
    
//                 console.log('email is validated');
//             }
//         }
       
//         else if (getInputValue.length != 10)
//         {
//             document.getElementById('err-four').innerHTML="Phone Number Must be of 10 characters";
//             document.getElementById('phone').style.borderColor="red";

//         }
// }
//     }

    return(
        <>
        <form>
            <fieldset>
                <legend>React Forms</legend>
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" name="name" onBlur={validateName}/>
                <p id="err-one" className="danger"></p>

                <label htmlFor="name">Email:</label>
                <input type="email" id="email" name="email" onBlur={validateEmail}/>
                <p id="err-three" className="danger"></p>

                <label htmlFor="phone">Phone :</label>
                <input type="tel" id="phone" name="phone" onBlur={validatePhone}/>
                <p id="err-four" className="danger"></p>
                <label htmlFor="city">City:</label>
               <select>
                   <option>Chennai</option>
                   <option>Mumbai</option>
                   <option>Hyderabad</option>
                   <option>PalayamKottai</option>
               </select>
                <label htmlFor="city">State:</label>
                <select>
                   <option>TamilNadu</option>
                   <option>Maharastra</option>
                   <option>Andhra Pradesh</option>
                   <option>kerala</option>
               </select>
                <label htmlFor="country">Country:</label>
                <select>
                   <option>India</option>
                   <option>Germany</option>
                   <option>Nepal</option>
                   <option>Bangladesh</option>
               </select>
                <label htmlFor="gender">Gender :</label>
                <input type="radio" id="male" name="male" value="Male" />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="female" value="FeMale" />
                <label htmlFor="female">Female</label>
                <div className="checkbox-section">
                <label htmlFor="termsAndConditions" className="checkbox-label">I Agree to this terms &#38; conditions</label>
                <input type="checkbox" name="termsAndConditions" id="termsAndConditions" />
                </div>

                <button type="submit" onClick={validateName}>Submit</button>
            </fieldset>
        </form>
        </>
    )
}
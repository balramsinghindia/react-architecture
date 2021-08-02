import React, { useState } from 'react';

export function Input({Type,Id,Name,OnBlur,Placeholder,OnchangeHandler,required,maxlength}){
    const [errorMessage,setErrorMessage] = useState(false);
    
   function onChange(e){
       var isValidate = false;
        console.log(e.target);
        if(required){
            if(e.target.value > maxlength){

                alert(`${Name} cannot be less thaan ${maxlength} characters`);
            }
            if( (e.target.value) && (e.target.value < maxlength)){
                OnchangeHandler(e.target.value);
            }
            else {
                alert('error');
            }
        }
        
   }

    return(
            
            <input type={Type} id={Id} name={Name} onBlur={OnBlur} placeholder={Placeholder} onChange={(e) => onChange}/>
         
            
    )
}
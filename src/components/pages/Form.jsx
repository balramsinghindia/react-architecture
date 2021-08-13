import { useState } from "react";
import FormComponent from "../FormComponent";
import Input from "../Input";
export default function Form(){

    const [ inputValue, setInputValue] = useState();
    const [ inputName, setInputName ] = useState();
    const [ nameError, setNameError ] = useState(false);
    const [ emailError, setEmailError ] = useState(false);


    const inputOnChange = (e) =>{
        setInputValue(e.target.value);
        setInputName(e.target.name);
    }

    const inputOnBlur = () =>{
        if (inputValue === undefined){
            console.log("no values entered");
        }
        else{
            console.log("input length", inputValue.length);
            validate();
        }
    }

    const validate = () =>{
        if(inputName === "fullName"){
            if (inputValue.length < 3 || inputValue.length > 30){
                setNameError(true);
                console.log("validate");
            }
            else{
                setNameError(false);
            }
        }
        if(inputName === "email"){
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)){
                setEmailError(true);
                console.log('email validate');
            }
        }
    }
    return(
        <>
        {/* <FormComponent/> */}
            <Input inputLabel="Name" inputName="fullName" inputId="name" inputPlaceholder="Please enter your name" inputChangeEvent={(e) => inputOnChange(e)} inputBlurEvent={inputOnBlur} inputError={nameError} />
            <Input inputLabel="Email" inputName="email" inputId="email" inputPlaceholder="Please enter your email" inputId="two" inputChangeEvent={(e) => inputOnChange(e)} inputBlurEvent={inputOnBlur} inputError={emailError} />
        </>
    );
};
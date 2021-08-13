

export default function Input({inputType, inputName, inputChangeEvent, inputBlurEvent, inputPlaceholder, inputId, inputLabel, inputError, inputErrorMsg}){
    return(
        <div>
            <label htmlFor={inputId} className="input-label">{inputLabel}: </label>
            <input type={inputType} name={inputName} onChange={inputChangeEvent} onBlur={inputBlurEvent} placeholder={inputPlaceholder} id={inputId} className="input"/>
            {inputError && <span>{inputErrorMsg}</span> }
        </div>
    );
}

Input.defaultProps = {
    inputType: "text",
    inputErrorMsg: "Please enter the fill.",
    inputPlaceholder: '',
    inputName: '',
    inputId: 'input-id',
    inputLabel: 'Input Label',
}
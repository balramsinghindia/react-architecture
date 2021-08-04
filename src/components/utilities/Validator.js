const regex = (value, regex) => {
    if(!(regex.test(value))) {
       return false
    }
    return true;
}

const maxLength = (value, maxLength) => {
    if(value.length > maxLength){
        return false
    }
    return true;
}

const required = (value) => {
    if(!value){
        return false
    }
    return true;
}

const minLength = (value, minLength) => {
    if(value.length < minLength){
        return false
    }
    return true;
}

export const validateInput = (value, validator) => {
    if(validator && validator.length) {
       
        for(let i = 0; i < validator.length; i++) {
            const method = eval(validator[i].check[0]);
            const error = method(value, validator[i].check[1]);
            if(!error) {
                return validator[i].message;
            }
        }
    }

}
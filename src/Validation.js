export function nameCheck(text){
    if(text.length <30 && text.length >0)
        return true;
    return false;
}

export function emailCheck(email){
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email.length>0 &&  (re.test(email)))
            return true;
        return false;
}
export function phoneCheck(phone){
    if(phone.length>0){
        if(!(/^\d+$/.test(phone))){
            // return 'Phone number should not contain charcter'; 
            return false;
        }
        else if(phone.length!=10){
            // return 'Phone must be of 10 length'; 
            return false;
        }
        return true;
    }
    else{
        // return 'Enter Phone Number'; 
        return false;
    }
}
import React from 'react';


export function Reducer( state = { value: 'Kumar', data:''}, action){

    switch(action.type){
        case 'initialState':
            return  action.data
        case 'modifiedState':
            return { value : ''}
        default :
            return { value : 'Ashok Kumar'}    
    }
};
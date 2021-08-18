function reducer(state = {vehicle: 'It is a train', marks:{}}, action){
    switch (action.type) {
        case "Car":
        return {
            ...state,
            marks: action.data,
            vehicle: "It is a Car"
        };
        case "Bike":
        return {
          ...state,
            marks: action.data,
          vehicle: "It is a Bike"
        };
        default:
          return {...state};
      }
    }
     
    export default reducer;
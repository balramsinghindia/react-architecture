function reducer(state = {vehicle: '', marks:{}}, action){
    switch (action.type) {
        case "Car":
        return {
            marks: action.data,
            vehicle: "It is a Car"
        };
        case "Bike":
        return {
            marks: action.data,
          vehicle: "It is a Bike"
        };
        default:
          return "No";
      }
    }
     
    export default reducer;
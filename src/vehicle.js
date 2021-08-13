function reducer( state = {vehicle: '', marks:{} , newData: ''},  action){
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
        case "Auto": 
         return {
             newData: 'Data changed'
         };
        default:
          return "No";
      }
    }
     
    export default reducer;
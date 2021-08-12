function reducer(state = {vehicle: 'truck'}, action){
switch (action.type) {
    case "Car":
    return {
        ...state,
        vehicle: "It is a Car"
    };
    case "Bike":
    return {
        ...state,
        vehicle: "It is a Bike"
    };
    default:
      return state;
  }
}
 
export default reducer;

// function reducer(state = { vehicle: "", marks: {}, wheels: "" }, action) {
//   switch (action.type) {
//     case "Car":
//       return {
//         marks: action.data,
//         vehicle: "It is a Car",
//         wheels: "It has 4 wheels",
//       };
//     case "Bike":
//       return {
//         marks: action.data,
//         vehicle: "It is a Bike",
//         wheels: "It has 4 wheels",
//       };
//     default:
//       return "No";
//   }
// }

// export default reducer;


function reducer(state = {vehicle: '', wheels: '' , color: ''}, action){
  switch (action.type) {
      case "Car":
      return {
          ...state,
          vehicle: "It is a Car",
          wheels: "It has 4 wheels",
          color: "white",
      };
      case "Bike":
      return {
          ...state,
          vehicle: "It is a Bike",
          wheels: "It has 2 wheels",
          color: 'black',
      };
      default:
        return state;
    }
  }
   
  export default reducer;
  
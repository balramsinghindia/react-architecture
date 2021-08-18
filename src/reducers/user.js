function reducer(state = {name: 'Nikhil', city:'Pune'}, action){
    switch (action.type) {
        case "name":
        return {
            ...state,
            name: action.data
        };
        case "city":
        return {
            ...state,
            city : action.data
        };
        default:
          return state;
      }
    }
     
export default reducer;
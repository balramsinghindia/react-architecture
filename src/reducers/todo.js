export default function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state,
                todo: action.data
            }
        default:
            return state
    }   
}

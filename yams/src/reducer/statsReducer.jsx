export const initialState = {
    results: [],
    error: '',
    lastId : -1
}



const statsReducer = (state, action) => {
    console.log(state);
    switch(action.type) {
        case 'add-result':
            return {
                ...state,
                throws:[],
                results : [...state.results, {id: state.lastId + 1, count: action.payload.count, brelan:action.payload.brelan}],
                lastId : state.lastId + 1,
                error: ''
            }
        
        default:
            return state;
    }
}

export default statsReducer
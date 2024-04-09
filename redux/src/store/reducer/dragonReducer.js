const initialState = {
    dragonList : []
}

const dragonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DRAGON/ADD': 
            return {
                ...state,
                dragonList : [...state.dragonList, {id:Date.now(), name:action.payload}]
            }
        default :
            return state;
    }
}

export default dragonReducer;
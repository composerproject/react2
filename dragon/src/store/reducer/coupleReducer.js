import {COUPLE_ADD, COUPLE_DELETE, COUPLE_SET_ERROR, COUPLE_SET_DRAGON, COUPLE_SET_KNIGHT} from "../constant/action-type.js";

const initialState = {
    dragonId: '',
    knightId: '',
    couples: [
        {
            id:1,
            dragonId:1,
            knightId:1,
        },
    ],
    id: 2,
    error: ''
}

const coupleReducer = (state = initialState, action) => {
    switch (action.type) {

        case COUPLE_SET_DRAGON:
            return {
                ...state,
                dragonId: action.payload,
                error: ''
            }

        case COUPLE_SET_KNIGHT:
            return  {
                    ...state,
                    knightId: action.payload,
                    error: ''
                }
            
        case COUPLE_ADD:
            return {
                ...state,
                couples: [...state.couples, {id: state.id, dragonId: state.dragonId, knightId: state.knightId}],
                dragonId: '',
                knightId: '',
                id: state.id + 1,
                error: ''
            }

        case COUPLE_SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case COUPLE_DELETE:
            
            return {
                ...state,
                couples: state.couples.filter((couple) => couple.id !== action.payload)
            }
        default:
            return state;
    }
}

export default coupleReducer;
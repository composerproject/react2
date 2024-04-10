import {KNIGHT_ADD, KNIGHT_DELETE, KNIGHT_SET_ERROR, KNIGHT_SET_NAME, KNIGHT_SET_AGE} from "../constant/action-type.js";

const initialState = {
    name: '',
    knights: [
        {
            id:1,
            name:'Dovahkiin',
            age: 32
        },
        {
            id:2,
            name:'Eragon',
            age: 15
        }
    ],
    id: 3,
    error: ''
}

const knightReducer = (state = initialState, action) => {
    switch (action.type) {

        case KNIGHT_SET_NAME:
            return {
                ...state,
                name: action.payload,
                error: ''
            }
        case KNIGHT_SET_AGE:
            return {
                ...state,
                age: action.payload,
                error: ''
            }

        case KNIGHT_ADD:
            return {
                ...state,
                knights: [...state.knights, {id: state.id, name: state.name.trim(), age: state.age}],
                name: '',
                age: '',
                id: state.id + 1,
                error: ''
            }

        case KNIGHT_SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case KNIGHT_DELETE:
            return {
                ...state,
                knights: state.knights.filter((knight) => knight.id !== action.payload)
            }
        default:
            return state;
    }
}

export default knightReducer;
import {KNIGHT_ADD, KNIGHT_DELETE, KNIGHT_SET_ERROR, KNIGHT_SET_NAME, KNIGHT_SET_AGE} from "../constant/action-type.js";

export const addKnight = () => ({
    type: KNIGHT_ADD
})

export const setKnightName = (payload) => ({
    type: KNIGHT_SET_NAME,
    payload
})

export const setKnightAge = (payload) => ({
    type: KNIGHT_SET_AGE,
    payload
})

export const setKnightError = (payload) => {
    return {
        type: KNIGHT_SET_ERROR,
        payload
    }
}

export const deleteKnight = (payload) => {
    return {
        type: KNIGHT_DELETE,
        payload
    }
}
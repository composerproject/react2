import {COUPLE_ADD, COUPLE_DELETE, COUPLE_SET_ERROR, COUPLE_SET_DRAGON, COUPLE_SET_KNIGHT} from "../constant/action-type.js";

export const addCouple = () => ({
    type: COUPLE_ADD,
})

export const setCoupleDragon = (payload) => ({
    type: COUPLE_SET_DRAGON,
    payload
})

export const setCoupleKnight = (payload) => ({
    type: COUPLE_SET_KNIGHT,
    payload
})

export const setCoupleError = (payload) => {
    return {
        type: COUPLE_SET_ERROR,
        payload
    }
}

export const deleteCouple = (payload) => {
    return {
        type: COUPLE_DELETE,
        payload
    }
}
import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE } from './types'

export const setTextFilter = (payload = '') => {
    return {
        type: SET_TEXT_FILTER,
        payload
    }
}

export const sortByDate = ()=> {
    return {
        type: SORT_BY_DATE
    }
}

export const sortByAmount = () => {
    return {
        type: SORT_BY_AMOUNT
    }
}

export const setStartDate = payload => {
    return {
        type: SET_START_DATE,
        payload
    }
}

export const setEndDate = payload => {
    return {
        type: SET_END_DATE,
        payload
    }
}

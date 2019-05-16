import moment from 'moment'
import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE } from '../actions/types'

const initialState = {
    text: '',
    sortBy: 'date', // or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEXT_FILTER:
            return {
                ...state,
                text: action.payload
            }
        case SORT_BY_DATE:
            return {
                ...state,
                sortBy: 'date'
            }
        case SORT_BY_AMOUNT:
            return {
                ...state,
                sortBy: 'amount'
            }
        case SET_START_DATE:
            return {
                ...state,
                startDate: action.payload
            }
        case SET_END_DATE:
            return {
                ...state,
                endDate: action.payload
            }
        default:
            return state
    }
}


export default filtersReducer

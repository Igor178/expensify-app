import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, GET_EXPENSES } from '../actions/types'

const initialState = []

const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return [
                ...state,
                action.expense
            ]
        case REMOVE_EXPENSE:
            return state.filter(({ id }) => id !== action.id)
        case EDIT_EXPENSE:
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        case GET_EXPENSES:
            return action.expenses
        default:
            return state
    }
}


export default expensesReducer


import db from '../../firebase/firebase'
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from './types'

export const addExpense = (expense) => {
    return {
        type: ADD_EXPENSE,
        expense
    }
}

// Async call with redux thunk && Storing the expense to the firebase
export const startAddExpense = (expense = {}) => dispatch => {
    // Destructure the object and setup default values
    const { description = '', notes = '', amount = 0, createdAt = 0} = expense
    // store values in expenseData object
    const expenseData = { description, notes, amount ,createdAt }
    // store expenseData object to the firebase && dispatching addExpense action to the redux store + use ref.key to grab unique indentifier from firebase
    db.ref('expenses').push(expenseData).then(ref => dispatch(addExpense({
        id: ref.key,
        ...expenseData
    }))).catch(err => console.log('Something went wrong' + err))
}

export const removeExpense = (id) => {
    return {
        type: REMOVE_EXPENSE,
        id
    }
}

export const editExpense = (id, updates) => {
    return {
        type: EDIT_EXPENSE,
        id,
        updates
    }
}


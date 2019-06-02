import db from '../../firebase/firebase'
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, GET_EXPENSES } from './types'

// Adding expense to Firebase
export const addExpense = (expense) => {
    return {
        type: ADD_EXPENSE,
        expense
    }
}

// Async call with redux thunk && Storing the expense to the firebase
export const startAddExpense = (expense = {}) => dispatch => {
    // Destructure the object and setup default values
    const { description = '', notes = '', amount = 0, createdAt = 0 } = expense
    // store values in expenseData object
    const expenseData = { description, notes, amount ,createdAt }
    // store expenseData object to the firebase && dispatching addExpense action to the redux store + use ref.key to grab unique indentifier from firebase
    db.ref('expenses').push(expenseData)
        .then(ref => dispatch(addExpense({
            id: ref.key,
            ...expenseData
        })))
        .catch(err => console.log('Something went wrong' + err))
}

// Removing Expense from firebase
export const removeExpense = (id) => {
    return {
        type: REMOVE_EXPENSE,
        id
    }
}

export const startRemoveExpense = (id) => dispatch => {
    db.ref(`expenses/${id}`)
        .remove()
        .then(() => dispatch(removeExpense(id)))
        .catch(err => console.log('Something went wrong' + err))
}

// Editing Expense from Firebase
export const editExpense = (id, updates) => {
    return {
        type: EDIT_EXPENSE,
        id,
        updates
    }
}

export const startEditExpense = (id, updates) => dispatch => {
    db.ref(`expenses/${id}`)
        .update(updates)
        .then(() => dispatch(editExpense(id, updates)))
        .catch(err => console.log('Something went wrong' + err))
}

// Fetching Expenses from Firebase
export const getExpenses = (expenses) => {
    return {
        type: GET_EXPENSES,
        expenses
    }
}

export const startGetExpenses = () => dispatch => {
    return db.ref('expenses')
     .once('value')
     .then(snapshot => {
         let expenses = []

         snapshot.forEach(childSnapshot => {
             expenses.push({
                 id: childSnapshot.key, // this is the unique id that get's generated when using push method()
                 ...childSnapshot.val()
             })
         })

         dispatch(getExpenses(expenses))
     }).catch(err => console.log('Something went wrong' + err))
}


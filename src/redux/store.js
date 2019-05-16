import { createStore, combineReducers } from 'redux'
import expensesReducer from './reducers/expensesReducer'
import filtersReducer from './reducers/filtersReducer'
import { addExpense, removeExpense, editExpense } from './actions/expensesActions'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filtersActions'
import { getVisibleExpenses } from '../utils/filterExpenses'

const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)




export default store











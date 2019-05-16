import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import store from './redux/store'
import './styles/style.scss'
import { addExpense } from './redux/actions/expensesActions'
import {getVisibleExpenses} from './utils/filterExpenses'
import { setTextFilter } from './redux/actions/filtersActions'

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})


store.dispatch(addExpense({ description: 'Salad', notes: 'Very Expenseive', amount: 2999 }))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))
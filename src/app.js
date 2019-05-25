import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import store from './redux/store'
import { startGetExpenses } from './redux/actions/expensesActions'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'
import './firebase/firebase'

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(startGetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})


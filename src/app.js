import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import store from './redux/store'
import { startGetExpenses } from './redux/actions/expensesActions'
import { login, logout } from './redux/actions/authActions'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'
import { firebase } from './firebase/firebase'

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

// Check authentication status
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // Redirects to dashboard page if the user is logged in
        store.dispatch(login(user.uid))
        store.dispatch(startGetExpenses()).then(() => {
            renderApp()
        })
        if (history.location.pathname === '/') {
            history.push('/dashboard')
        }
    } else {
        // Redirects back to root '/' if not logged in
        // store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

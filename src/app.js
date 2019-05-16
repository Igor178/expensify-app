import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import store from './redux/store'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))
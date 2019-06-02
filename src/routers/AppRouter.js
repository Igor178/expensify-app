import React from 'react'
import { createBrowserHistory } from 'history';
import LoginPage from '../components/LoginPage'
import HelpPage from '../components/HelpPage'
import CreateExpensePage from '../components/CreateExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

// Custom history passed to React-Router
export const history = createBrowserHistory();

const AppRouter = () => (
        <Router history={history}>
            <Switch>
                <Route path='/' component={LoginPage} exact />
                <PrivateRoute path='/dashboard' component={DashboardPage} />
                <PrivateRoute path='/create-expense' component={CreateExpensePage} />
                <PrivateRoute path='/edit/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} /> 
            </Switch>
        </Router>
)


export default AppRouter
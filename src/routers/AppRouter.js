import React from 'react'
import HelpPage from '../components/HelpPage'
import CreateExpensePage from '../components/CreateExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const AppRouter = () => (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/' component={DashboardPage} exact />
                    <Route path='/create-expense' component={CreateExpensePage} />
                    <Route path='/help' component={HelpPage} />
                    <Route path='/edit/:id' component={EditExpensePage} />
                    <Route component={NotFoundPage} /> 
                </Switch>
            </div>
        </BrowserRouter>
)


export default AppRouter
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to='/' activeClassName='active' exact>Dashboard</NavLink>
        <NavLink to='/create-expense' activeClassName='active'>Create Expense</NavLink>
        <NavLink to='/help' activeClassName='active'>Help</NavLink>
    </header>
)

export default Header
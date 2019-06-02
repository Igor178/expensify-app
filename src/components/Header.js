import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { startLogOut } from '../redux/actions/authActions'

const Header = ({ startLogOut }) => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to='/dashboard' activeClassName='active' exact>Dashboard</NavLink>
        <NavLink to='/create-expense' activeClassName='active'>Create Expense</NavLink>
        <NavLink to='/help' activeClassName='active'>Help</NavLink>
        <button onClick={startLogOut}>Sign Out</button>
    </header>
)

Header.propTypes = {
    startLogOut: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        startLogOut: () => dispatch(startLogOut())
    }
}

export default connect(null, mapDispatchToProps)(Header)
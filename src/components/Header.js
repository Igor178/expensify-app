import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { startLogOut } from '../redux/actions/authActions'

const Header = ({ startLogOut }) => (
    <header>
        <div className='content-container'>
            <div className='header-content'>
                <NavLink id='logo' to='/dashboard' exact>
                    <h1>Expensify App</h1>
                </NavLink>            
                {/*<NavLink to='/help' activeClassName='active'>Help</NavLink>*/}
                <button onClick={startLogOut} className='header-content__logout-btn'>Sign Out</button>
            </div>
        </div>
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
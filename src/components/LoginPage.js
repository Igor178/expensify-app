import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { startLogin } from '../redux/actions/authActions'

const LoginPage = ({ startLogin }) => (
    <div id='login-page__wrapper'>
        <div className='login-page__box'>
            <h1 className='box__title'>Budgeter</h1>    
            <p className='box__subtitle'>Let's get your expenses under control.</p>
            <button className='box__btn' onClick={startLogin}>Sign up with Google</button>
        </div>
    </div>
)

LoginPage.propTypes = {
    startLogin: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)

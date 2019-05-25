import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { startLogin } from '../redux/actions/authActions'

const LoginPage = props => (
    <button onClick={() => props.startLogin()}>Login</button>
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

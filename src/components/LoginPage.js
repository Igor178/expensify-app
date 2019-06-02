import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { startLogin } from '../redux/actions/authActions'

const LoginPage = ({ startLogin }) => (
    <div>    
        <button onClick={startLogin}>Sign Up</button>
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

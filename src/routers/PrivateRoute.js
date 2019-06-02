import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { Route, Redirect } from 'react-router-dom'

// Custom private route
export const PrivateRoute = ({ auth, component: Component, ...rest}) => {
    return (
        console.log(!!auth.isAuthenticated),
        // Render correct component if user in authenticated
        <Route {...rest} component={props => {
            return auth.isAuthenticated ? (
                <div>
                    <Header />
                    <Component {...props} />
                </div>
            ) : (
                <Redirect to='/' />
            )
        }}/>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(PrivateRoute)
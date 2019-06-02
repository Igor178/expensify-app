import { firebase, googleAuthProvider } from '../../firebase/firebase'
import { LOGOUT, LOGIN } from './types'

export const startLogin = () => dispatch => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
        .then(res => {
            console.log('Storing user data')
            dispatch(login(res.user.uid))
        })
        .catch(err => console.log(err))
}

export const startLogOut = () => dispatch => {
        return firebase.auth().signOut().then(() => {
            console.log('Logging user out')
            dispatch(logout())
        })
}

// Sets the isAuthenticated value
export const login = uid => {
    return {
        type: LOGIN,
        uid
    }
}

// Removes the isAuthenticated value
export const logout = () => {
    return {
        type: LOGOUT
    }
}

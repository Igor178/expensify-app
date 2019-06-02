import { LOGOUT, LOGIN } from '../actions/types'

const initialState = {
    isAuthenticated: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: ''
            }
        case LOGIN:
            return {
                ...state,
                isAuthenticated: action.uid
            }
        default:
            return state
    }
}


export default authReducer


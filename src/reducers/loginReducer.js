import { ActionTypes } from '../actions'

// This handles UI elements in the login page. including username and password
// inputs, error texts, etc.
const LoginReducer = (state = {
    username: '',
    password: ''
}, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_USERNAME:
            return {
                ...state,
                username: action.username,
            }
        case ActionTypes.UPDATE_PASSWORD:
            return {
                ...state,
                password: action.password,
            }
        case ActionTypes.UPDATE_USERNAME_ERROR:
            return {
                ...state,
                usernameErrorText: action.error
            }
        case ActionTypes.UPDATE_PASSWORD_ERROR:
            return {
                ...state,
                passwordErrorText: action.error
            }
        case ActionTypes.CLEAR_LOGIN_INPUTS:
        // Clear button also clears error texts
            return {
                ...state,
                username: '',
                password: '',
                usernameErrorText: '',
                passwordErrorText: ''
            }
        default:
            return state
    }
}

export default LoginReducer
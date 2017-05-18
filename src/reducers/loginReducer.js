import { ActionTypes } from '../actions'

// This handles UI elements in the login page. including username and password
// inputs, error texts, etc.
const LoginReducer = (state = {
    username: '',
    password: '',
    usernameErrorText: '',
    passwordErrorText: '',
    // If the loading animation is shown
    loading: false
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
        // Clear button also clears error texts
        case ActionTypes.CLEAR_LOGIN_INPUTS:
            return {
                ...state,
                username: '',
                password: '',
                usernameErrorText: '',
                passwordErrorText: ''
            }
        // Shows loading animation
        case ActionTypes.LOGIN_START_LOADING:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.LOGIN_END_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default LoginReducer
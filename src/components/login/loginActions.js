import { ActionTypes, setDebugString } from '../../actions'
import { Locations } from '../app'
import { updateAccountAndPortfolio } from '../main/mainActions'
const setCredentials = (credentials) => {
    return {
        type: ActionTypes.LOGIN,
        credentials: credentials
    }
}

const goToMain = () => {
    return {
        type: ActionTypes.NAVIGATE,
        location: Locations.MAIN
    }
}

// Set user object after logging in 
const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        user: user
    }
}

const errorLogin = () => {
    return {
        type: ActionTypes.UPDATE_PASSWORD_ERROR,
        error: "Error during login, wrong username/password"
    }
}

// Toggles the loading modal in login screen
const loginToggleLoading = () => {
    return {
        type: ActionTypes.LOGIN_TOGGLE_LOADING
    }
}

export const testLogin = (username, password) => {
    return (dispatch) => {
        let credentials = {
            username: username,
            password: password
        }
        dispatch(loginToggleLoading())
        var Robinhood = require('robinhood')(credentials, () => {
            Robinhood.user((err, response, body) => {
                if (err) {
                    console.error(err);
                } else if (response.statusCode >= 400) {
                    console.log("Error logging in")
                    dispatch(errorLogin())
                    dispatch(loginToggleLoading())

                }
                else {
                    dispatch(setCredentials(credentials))
                    dispatch(updateAccountAndPortfolio(Robinhood))
                    dispatch(setUser(body))
                    dispatch(setDebugString(body))

                    // Login success, getting accounts data
                    dispatch(loginToggleLoading())
                    // When login success, save credentials in robinhood reducer
                    dispatch(goToMain())
                }
            })
        });
    }
}


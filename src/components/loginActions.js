import { ActionTypes } from '../actions'
import { Locations } from './app'

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

const errorLogin = () => {
    return {
        type: ActionTypes.UPDATE_PASSWORD_ERROR,
        error: "Error during login, wrong username/password"
    }
}

const logUserJson = (text) => {
    return {
        type: ActionTypes.DEBUG,
        text: text
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
        var Robinhood = require('robinhood')(credentials, function () {
            Robinhood.user(function (err, response, body) {
                if (err) {
                    console.error(err);
                } else if (response.statusCode >= 400) {
                    console.log("Error logging in")
                    dispatch(errorLogin())
                    dispatch(loginToggleLoading())

                }
                else {
                    dispatch(loginToggleLoading())
                    // When login success, save credentials in robinhood reducer
                    dispatch(setCredentials(credentials))
                    dispatch(goToMain())
                    dispatch(logUserJson(body))
                }
            })
        });
    }
}
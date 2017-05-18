import { ActionTypes, setDebugString } from '../../actions'
import { Locations } from '../app'
import { getAccountAndPortfolio } from '../main/mainActions'
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

const errorLogin = (text) => {
    return {
        type: ActionTypes.UPDATE_PASSWORD_ERROR,
        error: text ? text : "Error during login, wrong username/password"
    }
}

// Shows the loading modal in login screen
const loginStartLoading = () => {
    return {
        type: ActionTypes.LOGIN_START_LOADING
    }
}

// Hides the loading modal in login screen
const loginEndLoading = () => {
    return {
        type: ActionTypes.LOGIN_END_LOADING
    }
}


const setRobinhoodClient = (client) => {
    return {
        type: ActionTypes.SET_ROBINHOOD_CLIENT,
        client: client
    }
}

export const testLogin = (username, password) => {
    return (dispatch, getState) => {
        let credentials = {
            username: username,
            password: password
        }
        dispatch(loginStartLoading())

        // Clear loading if timed out 30s
        setTimeout(() => {
            console.log('loading timeout clear')
            if (getState().login.loading) {
                dispatch(loginEndLoading())
                dispatch(errorLogin('Login timed out'))
            }
        }, 30000)
        var Robinhood = require('robinhood')(credentials, () => {
            Robinhood.user((err, response, body) => {
                if (err) {
                    console.error(err);
                    dispatch(errorLogin("Error connecting to the server"))
                } else if (response.statusCode >= 400) {
                    console.log("Error logging in")
                    dispatch(errorLogin())
                }
                else {
                    dispatch(setCredentials(credentials))
                    dispatch(setRobinhoodClient(Robinhood))
                    dispatch(setUser(body))
                    dispatch(setDebugString(body))
                    dispatch(goToMain())
                }
                dispatch(loginEndLoading())
            })
        });
    }
}


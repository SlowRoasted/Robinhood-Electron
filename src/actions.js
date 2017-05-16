export const ActionTypes = {
    LOGIN: 'LOGIN',
    UPDATE_USERNAME: 'UPDATE_USERNAME',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_USERNAME_ERROR: 'UPDATE_USERNAME_ERROR',
    UPDATE_PASSWORD_ERROR: 'UPDATE_PASSWORD_ERROR',
    NAVIGATE: 'NAVIGATE',
    DEBUG: 'DEBUG',
    CLEAR_LOGIN_INPUTS: 'CLEAR_LOGIN_INPUTS',
    LOGIN_TOGGLE_LOADING: 'LOGIN_TOGGLE_LOADING',
    SET_POSITIONS: 'SET_POSITIONS',
    SET_USER: 'SET_USER',
    SET_ACCOUNT: 'SET_ACCOUNT',
    SET_PORTFOLIO: 'SET_PORTFOLIO'
}

// Setting debug string in main reducer
export const setDebugString = (text) => {
    return {
        type: ActionTypes.DEBUG,
        text: text
    }
}
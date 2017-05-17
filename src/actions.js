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
    SET_PORTFOLIO: 'SET_PORTFOLIO',
    SET_POSITION_INSTRUMENTS: 'SET_POSITION_INSTRUMENTS',
    SET_ROBINHOOD_CLIENT: 'SET_ROBINHOOD_CLIENT',
    SET_PORTFOLIO_PRICES: 'SET_PORTFOLIO_PRICES'
}

// Setting debug string in main reducer
export const setDebugString = (text) => {
    return {
        type: ActionTypes.DEBUG,
        text: text
    }
}

const resource = (method, url) => {
    const options = {
        method,
        credentials: 'include',
    }
    return fetch(url, options)
        .then(r => {
            if (r.status === 200) {
                return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
            } else {
                // useful for debugging, but remove in production
                console.error(`${method} ${endpoint} ${r.statusText}`)
                throw new Error(r.statusText)
            }
        })
}

// Just a renamed wrapper for a get call to get instrument object
export const getInstrument = (url) => {
    return resource('GET', url)
        .then(r => r).catch(r => r)
}

// Get quotes of a list of stock symbols
export const getQuotes = (symbols) => {
    return resource('GET', `https://api.robinhood.com/quotes/?symbols=${symbols.toString()}`)
        .then(r => r).catch(r => r)
}
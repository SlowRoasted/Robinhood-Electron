import { ActionTypes } from '../actions'

// This handles all robinhood related actions, and stores login credentials for
// future api calls, should handle most api calls for main page.
const RobinhoodReducer = (state = {
    credentials: {},
    debug: '',
    // Quantity and avg price for all currently held stocks
    // positionInstruments, portfolioPrices all have the same length as positions
    // and its contents have the same repective ordering 
    positions: [],
    // Ticker and price url for all currently held stocks
    positionInstruments: [],
    // User info including name, username, email, etc
    user: {},
    account: {},
    // Overall portfolio data
    portfolio: {},
    // Should be an authenticated Robinhood client shared by the app
    client: {},
    // Pricing data of current portfolio
    portfolioPrices: []
}, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                credentials: action.credentials
            }
        case ActionTypes.DEBUG:
            // Show a debug text in main
            return {
                ...state,
                debug: action.text
            }
        case ActionTypes.SET_POSITIONS:
            // Some old portfolio entries with 0 quantities returned from server (Can make the non-zero position call instead)
            let positions = action.positions ?
                action.positions.filter((inst) => {
                    return parseFloat(inst.quantity) > 0
                }) : []
            return {
                ...state,
                positions: positions
            }
        case ActionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case ActionTypes.SET_ACCOUNT:
            return {
                ...state,
                account: action.account
            }
        case ActionTypes.SET_PORTFOLIO:
            return {
                ...state,
                portfolio: action.portfolio
            }
        case ActionTypes.SET_POSITION_INSTRUMENTS:
            return {
                ...state,
                positionInstruments: action.positionInstruments
            }
        case ActionTypes.SET_ROBINHOOD_CLIENT:
            return {
                ...state,
                client: action.client
            }
        case ActionTypes.SET_PORTFOLIO_PRICES:
            return {
                ...state,
                portfolioPrices: action.portfolioPrices
            }
        default:
            return state
    }
}

export default RobinhoodReducer
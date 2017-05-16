import { ActionTypes } from '../actions'

// This handles all robinhood related actions, and stores login credentials for
// future api calls, should handle most api calls for main page.
const RobinhoodReducer = (state = {
    credentials: {},
    debug: '',
    positions: [],
    user: {},
    account: {},
    portfolio: {}
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
            return {
                ...state,
                positions: action.positions
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
        default:
            return state
    }
}

export default RobinhoodReducer
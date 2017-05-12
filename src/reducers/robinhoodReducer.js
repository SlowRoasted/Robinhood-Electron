import { ActionTypes } from '../actions'

// This handles all robinhood related actions, and stores login credentials for
// future api calls, should handle most api calls for main page.
const RobinhoodReducer = (state = {
    credentials: {},
    debug: ''
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
        default:
            return state
    }
}

export default RobinhoodReducer
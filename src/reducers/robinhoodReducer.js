import { ActionTypes } from '../actions'

// This handles all robinhood related actions, and stores the app-wide client
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
            return {
                ...state,
                debug: action.text
            }
        default:
            return state
    }
}

export default RobinhoodReducer
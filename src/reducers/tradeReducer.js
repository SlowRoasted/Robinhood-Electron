import { ActionTypes } from '../actions'

// This handles UI elements in the trade panel
const TradeReducer = (state = {
    instrument: {
        url: '',
        symbol: ''
    },
    bid_price: '',
    quantity: '',
    type: '',
    trigger: 'gfd',
}, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default TradeReducer
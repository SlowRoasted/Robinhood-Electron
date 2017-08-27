import { ActionTypes } from '../actions'

// Main Content Panel Reducer
const MainReducer = (state = {
  selectedSymbol: "TEST"
}, action) => {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_SYMBOL:
      return {
        ...state,
        location: action.location
      }
    default:
      return state
  }
}

export default MainReducer
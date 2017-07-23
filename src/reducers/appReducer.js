import { ActionTypes } from '../actions'
import { Locations } from '../components/app'

// Handles app-wide actions like navigation
const AppReducer = (state = {
  location: Locations.LOGIN
}, action) => {
  switch (action.type) {
    case ActionTypes.NAVIGATE:
      return {
        ...state,
        location: action.location
      }
    default:
      return state
  }
}

export default AppReducer
const AppReducer = (state = {
  location: 'login'
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
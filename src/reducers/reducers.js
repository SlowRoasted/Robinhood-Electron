import { combineReducers } from 'redux'
import AppReducer from './appReducer'
import LoginReducer from './loginReducer'

const Reducers = combineReducers({
  app: AppReducer,
  login: LoginReducer
})

export default Reducers
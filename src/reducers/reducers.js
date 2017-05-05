import { combineReducers } from 'redux'
import AppReducer from './appReducer'

const Reducers = combineReducers({
  app: AppReducer,
})

export default Reducers
import { combineReducers } from 'redux'
import AppReducer from './appReducer'
import LoginReducer from './loginReducer'
import TradeReducer from './tradeReducer'

const Reducers = combineReducers({
  app: AppReducer,
  robinhood: RobinhoodReducer,
  login: LoginReducer,
  trade: TradeReducer
})

export default Reducers
import { combineReducers } from 'redux'
import AppReducer from './appReducer'
import RobinhoodReducer from './robinhoodReducer'
import LoginReducer from './loginReducer'
import TradeReducer from './tradeReducer'
import MainReducer from './mainReducer'


const Reducers = combineReducers({
  app: AppReducer,
  robinhood: RobinhoodReducer,
  login: LoginReducer,
  trade: TradeReducer,
  main: MainReducer
})

export default Reducers
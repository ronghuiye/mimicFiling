import { combineReducers } from "redux"
import calendarReducer from './containers/calendar/reducer'
import returnReducer from './containers/return/reducer'

const rootReducer = combineReducers({calendarReducer, returnReducer})
export default rootReducer
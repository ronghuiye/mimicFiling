import { createStore,  applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import rootReducer from "./reducers";
import { createLogger } from 'redux-logger'

export default applyMiddleware(ReduxThunk, createLogger({collapsed:true}))(createStore)(rootReducer);
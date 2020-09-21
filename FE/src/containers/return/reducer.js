import {actionTypes} from './constants'
import init_state from './initialState'

const managerReturnReducer = (state = init_state, action) =>
{
  switch(action.type){
    case actionTypes.SET_RETURN_LIST:
      return {
        ...state,
        returnList: action.data
      }
    case actionTypes.SET_YEAR:
      return {
        ...state,
        year: action.data
      }
    case actionTypes.SET_MONTH:
      return {
        ...state,
        month: action.data
      }
    case actionTypes.SET_SELECTED:
      return {
        ...state,
        selected: action.data
      }
    default: return state
  }
}

export default managerReturnReducer
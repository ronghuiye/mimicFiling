import {actionTypes} from './constants'
import init_state from './initialState'

const managerCalendarReducer = (state = init_state, action) =>
{
  switch(action.type){
    case actionTypes.SET_CALENDAR_LIST:
      return {
        ...state,
        calendarList: action.data
      }
    default: return state
  }
}

export default managerCalendarReducer
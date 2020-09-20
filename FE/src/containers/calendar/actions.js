import ManagerCalendarAPI from './ManagerCalendarAPI'
import {actionTypes} from "./constants";

const setCalendarList = data =>({type: actionTypes.SET_CALENDAR_LIST, data})

export const fetchCalendarList = () => {
  let errorText = 'Failed to get calendar list'
  return dispatch => {
    ManagerCalendarAPI.fetchCalendarList().then((response) => {
      if (response && response.success) {
        dispatch(setCalendarList(response.data))
      } else {
        console.log(errorText)
      }
    }).catch(error => {
      console.log(errorText)
    })
  }
}

export const createCalendar = (body) => {
  let errorText = 'Failed to create calendar'
  return dispatch => {
    ManagerCalendarAPI.createCalendar(body).then((response) => {
      if (response && response.success) {
        dispatch(fetchCalendarList())
      } else {
        console.log(errorText)
      }
    }).catch(error => {
      console.log(errorText)
    })
  }
}
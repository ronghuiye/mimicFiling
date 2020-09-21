import ManagerCalendarAPI from './ManagerCalendarAPI'
import {actionTypes} from "./constants";
import { INIT_PAGE_STATE } from './initialState'

const setCalendarList = data =>({type: actionTypes.SET_CALENDAR_LIST, data})
export const setPageState = pageState => ({type: actionTypes.SET_PAGE_STATE, pageState})

export const fetchCalendarList = (pageState = INIT_PAGE_STATE) => {
  let errorText = 'Failed to get calendar list'
  return dispatch => {
    ManagerCalendarAPI.fetchCalendarList(pageState).then((response) => {
      if (response && response.success) {
        dispatch(setCalendarList(response.data))
        dispatch(setPageState(response.pageState))
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

export const deleteCalendar = (ids) => {
  let errorText = 'Failed to delete calendar'
  return dispatch => {
    ManagerCalendarAPI.deleteCalendar(ids).then((response) => {
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
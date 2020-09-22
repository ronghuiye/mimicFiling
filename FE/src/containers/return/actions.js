import ManagerReturnrAPI from './ManagerReturnAPI'
import {actionTypes} from "./constants";

const setReturnList = data =>({type: actionTypes.SET_RETURN_LIST, data})
export const setYear = data =>({type: actionTypes.SET_YEAR, data})
export const setMonth = data =>({type: actionTypes.SET_MONTH, data})
export const setSelected = data =>({type: actionTypes.SET_SELECTED, data})

export const fetchReturnList = (year, month) => {
  let errorText = 'Failed to get return list'
  return dispatch => {
    ManagerReturnrAPI.fetchReturnList(year, month).then((response) => {
      if (response && response.success) {
        dispatch(setReturnList(response.data))
      } else {
        console.log(errorText)
      }
    }).catch(error => {
      console.log(errorText)
    })
  }
}
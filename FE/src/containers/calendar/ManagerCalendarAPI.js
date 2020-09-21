import axios from 'axios'

class ManagerCalendarAPI {

  static fetchCalendarList(pageState) {
    const axiosInstance = axios.create()
    return axiosInstance({
      method: 'get',
      url: '/api/v1/calendars',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      },
      params: {
        'page': pageState.page,
        'rowsPerPage': pageState.rowsPerPage,
        'orderBy': pageState.orderBy,
        'order': pageState.order
      }
    })
      .then(response => response.data)
      .catch(error => console.log(error))
  }

  static createCalendar(body) {
    const axiosInstance = axios.create()
    return axiosInstance({
      method: 'post',
      url: '/api/v1/calendars',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      },
      data:body
    })
      .then(response => response.data)
      .catch(error => console.log(error))
  }


  static deleteCalendar(ids) {
    const axiosInstance = axios.create()
    return axiosInstance({
      method: 'delete',
      url: '/api/v1/calendars',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      },
      data:{
        'ids': ids
      }
    })
      .then(response => response.data)
      .catch(error => console.log(error))
  }
}

export default ManagerCalendarAPI
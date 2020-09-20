import axios from 'axios'

class ManagerCalendarAPI {

  static fetchCalendarList() {
    const axiosInstance = axios.create()
    return axiosInstance({
      method: 'get',
      url: '/api/v1/calendars',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
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
}

export default ManagerCalendarAPI
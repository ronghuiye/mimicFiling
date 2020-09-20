import axios from 'axios'

class ManagerReturnAPI {

  static fetchReturnList(year, month) {
    const axiosInstance = axios.create()
    return axiosInstance({
      method: 'get',
      url: `/api/v1/returns/${year}/${month}`,
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.data)
      .catch(error => console.log(error))
  }
}

export default ManagerReturnAPI
import axios from 'axios'

const request = axios.create({
  baseURL: '/',
  timeout: 60000,
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use((res) => {
  switch (res.code) {
    case 401:
      //
      break
    case 400:
      //
      break
    default:
    //
  }
})

export default request

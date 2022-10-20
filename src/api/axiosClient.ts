import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export default axiosClient

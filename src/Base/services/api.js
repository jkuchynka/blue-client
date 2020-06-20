import axios from 'axios'
import { LocalStorage } from 'quasar'

let axiosInstance = axios.create({
  baseURL: process.env.API_URL
})

axiosInstance.interceptors.request.use(config => {
  const token = LocalStorage.getItem('token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

export default axiosInstance

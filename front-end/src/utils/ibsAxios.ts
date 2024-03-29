import axios from 'axios'

const ibsAxios = axios.create({
  baseURL: `http://${window.location.hostname}:8081/api`,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control_Allow_Origin': '*',
    Accept: 'application/json',
  },
})

export const multipartConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control_Allow_Origin': '*',
  },
}

export default ibsAxios

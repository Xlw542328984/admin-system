import axios from '../utils/axios.js'

export function getReport(params) {
  return axios.get('/reports/type/1', params)
}

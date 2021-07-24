import axios from '../utils/axios.js'

export function getGoods(params) {
  return axios.get('/goods', params)
}
export function remove(params) {
  return axios.delete('/goods/'+ params)
}

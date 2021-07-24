import axios from '../utils/axios.js'

export function getOrder(params) {
  return axios.get('/orders',params)
}

export function showProgress() {
  return axios.get('/kuaidi/123456')
}


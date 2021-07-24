import axios from '../utils/axios.js'

export function getCate(params) {
  return axios.get('/categories', params)
}

export function getParentCate(params) {
  return axios.get('/categories', params)
}

export function add(params) {
  return axios.get('/categories', params)
}

export function remove(params) {
  return axios.delete('/categories/'+ params)
}

export function show(params) {
  return axios.get('/categories/'+ params)
}

export function edit(cat_id,params) {
  return axios.put('/categories/'+ cat_id, params)
}


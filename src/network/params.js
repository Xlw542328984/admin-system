import axios from '../utils/axios.js'

export function getCate() {
  return axios.get('/categories')
}

export function getParams(getCateId,params) {
  return axios.get(`/categories/${getCateId}/attributes`,params)
}

export function add(getCateId,params) {
  return axios.post(`/categories/${getCateId}/attributes`,params)
}

export function edit(getCateId,attrId,params) {
  return axios.get(`/categories/${getCateId}/attributes/${attrId}`,params)
}

export function editParams(getCateId,attr_id,params) {
  return axios.get(`categories/${getCateId}/attributes/${attr_id}`,params)
}

export function remove(getCateId,attrId) {
  return axios.delete(`categories/${getCateId}/attributes/${attrId}`)
}

export function save(getCateId,attr_id,params) {
  return axios.put(`categories/${getCateId}/attributes/${attr_id}`,params)
}


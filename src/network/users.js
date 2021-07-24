import axios from '../utils/axios.js'

export function getUser(params) {
  return axios.get('/users',params)
}

export function stateChanged(params) {
  return axios.put(`/users/${params.id}/state/${params.mg_state}`)
}

export function add(params) {
  return axios.post('/users',params)
}

export function show(params) {
  return axios.get('/users/' + params)
}

export function update(id,params) {
  return axios.put('/users/' + id,params)
}

export function deleteUser(params) {
  return axios.delete('/users/' + params)
}

export function getRole() {
  return axios.get('/roles')
}
export function saveRole(id,params) {
  return axios.put(`users/${id}/role`, params)
}

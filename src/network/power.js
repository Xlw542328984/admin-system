import axios from '../utils/axios.js'

export function getRights() {
  return axios.get('/rights/list')
}

export function getRoles() {
  return axios.get('/roles')
}
export function removeRight(params) {
  return axios.delete(`/roles/${params.role.id}/rights/${params.rightId}`)
}
export function add(params) {
  return axios.post('/roles',params)
}
export function showSetRight() {
  return axios.get('/rights/tree')
}
export function showEdit(params) {
  return axios.get('/roles/' + params)
}

export function deleteRoles(params) {
  return axios.delete('/roles/' + params)
}

export function editRole(roleId,params) {
  return axios.put('/roles/' + roleId, params)
}

export function allRight(roleId,params) {
  return axios.post(`/roles/${roleId}/rights`,params)
}


import axios from '../utils/axios.js'

export function getMenuList() {
  return axios.get('/menus')
}

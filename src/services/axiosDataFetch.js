import axios from 'axios'


const getAll = (baseUrl) => {
    const request =  axios.get(baseUrl)
    return request.then(response => response.data)
}

// const create = newObject => {
//   return axios.post(baseUrl, newObject)
// }

// const update = (id, newObject) => {
//   return axios.put(`${baseUrl}/${id}`, newObject)
// }
// const deletePerson =(id) => {
//   return axios.delete(`${baseUrl}/${id}`)
// }
const dataServices = {  getAll }
export default dataServices
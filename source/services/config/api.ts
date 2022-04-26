import axios from 'axios'
// Pode ser algum servidor executando localmente:
// http://localhost:3000

const path_prod = 'https://funcap.mapacultural.se.gov.br/api'

const path_dev = 'http://192.168.100.3:8000/api'

export const path = process.env.NODE_ENV === 'production' ? path_prod : path_dev

const api = axios.create({
  baseURL: path,
  headers: {
    Authorization: 'Api-key 2458cdd1-b568-52eb-a99f-d7e006dface9',
  },
})

export default api

import axios from 'axios'

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const api = axios.create({
	baseURL: 'https://funcap.mapacultural.se.gov.br/',
	headers: {
		Authorization: 'Api-key 2458cdd1-b568-52eb-a99f-d7e006dface9',
	},
})

export default api

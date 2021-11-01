type methodHTTP = 'POST' | 'PUT' | 'GET' | 'DELETE' | 'HEAD'

const url = 'http://localhost:3000/'

async function HTTPRequest(
	api: string,
	method: methodHTTP,
	data = {}
): Promise<Response> {
	if (method === 'GET') {
		return await fetch(url + api, {
			method: method,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
	} else
		return await fetch(url + api, {
			method: method,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				data,
			}),
		})
}

export default HTTPRequest

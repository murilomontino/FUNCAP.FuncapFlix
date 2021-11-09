import io from 'socket.io-client'

const path_prod = 'http://funcap.mapacultural.se.gov.br/'

const path_dev = 'http://192.168.100.3:3000/'

const socket = io(path_dev, {
	transports: ['websocket', 'polling', 'flashsocket'],
})

export default socket

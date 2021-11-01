import { User } from 'types/User'

import { UsersTypes, actionTypes, actionsFunctions } from './types'

const login = (user: User): actionTypes => {
	return {
		type: UsersTypes.login,
		user,
	}
}

const logout = (): actionTypes => {
	return {
		type: UsersTypes.logout,
		user: {} as User,
	}
}

const actions: actionsFunctions = {
	login,
	logout,
}

export default actions

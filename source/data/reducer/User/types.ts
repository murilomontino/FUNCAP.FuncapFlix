import { User } from 'types/User'

// Action Types
export enum UsersTypes {
	login = 'USER/LOGIN',
	logout = 'USER/LOGOUT',
}

// State Type
export interface UserState {
	readonly authentication: boolean
	readonly user: User
}
export interface actionsFunctions {
	login(user: User): void
	logout(): void
}

export type actionTypes = {
	type: UsersTypes
	user: User
}

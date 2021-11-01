import React, { useCallback, useState } from 'react'

import { createContext, useContextSelector } from 'use-context-selector'

type FormLogin = {
	cpf: string
	onChangeCPF: (cpf: string) => void
	password: string
	onChangePassword: (password: string) => void
}

const FormLoginContext = createContext({} as FormLogin)

const FormLoginProvider: React.FC = ({ children }) => {
	const [cpf, setCPF] = useState('')
	const [password, setPassword] = useState('')

	const onChangeCPF = useCallback((cpf: string) => {
		setCPF(cpf)
	}, [])

	const onChangePassword = useCallback((password: string) => {
		setPassword(password)
	}, [])

	return (
		<FormLoginContext.Provider
			value={{
				cpf,
				password,
				onChangeCPF,
				onChangePassword,
			}}
		>
			{children}
		</FormLoginContext.Provider>
	)
}

export default FormLoginProvider

export const useFormPassword = () => {
	const password = useContextSelector(
		FormLoginContext,
		(state) => state.password
	)
	const onChangePassword = useContextSelector(
		FormLoginContext,
		(state) => state.onChangePassword
	)

	return {
		password,
		onChangePassword,
	}
}

export const useFormCPF = () => {
	const cpf = useContextSelector(FormLoginContext, (state) => state.cpf)
	const onChangeCPF = useContextSelector(
		FormLoginContext,
		(state) => state.onChangeCPF
	)

	return {
		cpf,
		onChangeCPF,
	}
}

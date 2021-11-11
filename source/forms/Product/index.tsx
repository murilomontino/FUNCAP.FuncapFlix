import React, { useState } from 'react'

import * as DocumentPicker from 'expo-document-picker'

import { createContext, useContextSelector } from 'use-context-selector'

type Document = {
	type: 'success'
	name: string
	size?: number | undefined
	uri: string
	mimeType?: string | undefined
	lastModified?: number | undefined
	file?: any
	output?: any
}
type Genero = {
	[key: number]: string
}

type FormProduct = {
	title: string
	subTitle: string
	capa: Document
	pdf: Document
	getImage: () => Promise<boolean>
	getPDF: () => Promise<boolean>
	sinopse: string
	resumo: string
	genero: Genero
}

const FormProductContext = createContext({} as FormProduct)

const FormProductProvider: React.FC = ({ children }) => {
	const [title, setTitle] = useState('')
	const [subTitle, setSubTitle] = useState('')
	const [sinopse, setSinopse] = useState('')
	const [resumo, setResumo] = useState('')
	const [genero, setGenero] = useState({} as Genero)
	const [capa, setCapa] = useState({} as Document)
	const [pdf, setPDF] = useState({} as Document)

	const getImage = async () => {
		const obj = await DocumentPicker.getDocumentAsync({
			type: ['image/png', 'image/jpeg'],
		})

		if (obj.type === 'success') {
			setCapa(obj)

			return true
		}

		return false
	}

	const getPDF = async () => {
		const document = await DocumentPicker.getDocumentAsync({
			type: 'application/pdf',
		})

		if (document.type === 'success') {
			setPDF(document)
			return true
		}
		return false
	}

	return (
		<FormProductContext.Provider
			value={{ title, subTitle, capa, pdf, getImage, getPDF }}
		>
			{children}
		</FormProductContext.Provider>
	)
}

export default FormProductProvider

export const useFormImage = () => {
	const getImage = useContextSelector(
		FormProductContext,
		(value) => value.getImage
	)
	const image = useContextSelector(FormProductContext, (value) => value.capa)

	return {
		getImage,
		image,
	}
}

export const useFormPDF = () => {
	const getPDF = useContextSelector(FormProductContext, (value) => value.getPDF)
	const pdf = useContextSelector(FormProductContext, (value) => value.pdf)
	return {
		getPDF,
		pdf,
	}
}

import React, { useState } from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native'

import { ProductsAttributes } from 'types/Products'

import api from 'services'

const SendFormButtonProduct = () => {
	const [document, setDocument] = useState({} as ProductsAttributes)

	const sendForm = async () => {
		const response = await api.post('add-book', {
			arquivo: 'alo',
		})
	}

	return (
		<TouchableHighlight onPress={sendForm}>
			<Text>Enviar Produto</Text>
		</TouchableHighlight>
	)
}

export default SendFormButtonProduct

const styles = StyleSheet.create({})

import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import constants from 'global/constants'
import { ProductsAttributes } from 'types/Products'

import BooksProvider from 'components/context/ContextBooks'
import CardBooks from 'components/organism/CardBooks'
import PdfViewer from 'components/organism/PDFViewer'
import socket from 'services/config/socket'

const Literatura = () => {
	const [products, setProducts] = useState<ProductsAttributes[]>([])

	const { window } = useDimensions()

	useEffect(() => {
		socket.emit('get-PDF', setProducts)
	}, [])

	return (
		<BooksProvider>
			<View style={styles.container}>
				<View
					style={{
						width: window.width,
					}}
				>
					<PdfViewer />
				</View>
				<FlatList
					style={{ marginBottom: 40, minHeight: 300 * products.length ?? 1 }}
					data={products}
					renderItem={({ item }) => {
						return <CardBooks item={item} />
					}}
					keyExtractor={(item) => item.nome_arquivo}
				/>
			</View>
		</BooksProvider>
	)
}

export default Literatura

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: constants.headerHight,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
})

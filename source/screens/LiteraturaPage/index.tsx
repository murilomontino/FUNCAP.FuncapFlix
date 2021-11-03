import React from 'react'
import { Button, Dimensions, StyleSheet, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import colors from 'global/colors'
const { height } = Dimensions.get('window')

const Literatura = () => {
	const { navigate } = useNavigation()

	return (
		<View style={styles.container}>
			<Button
				title="Clique Aqui"
				onPress={() => {
					navigate('PDFView', { id: '12371623' })
				}}
			/>
		</View>
	)
}

export default Literatura

const styles = StyleSheet.create({
	container: {
		minHeight: height,
		backgroundColor: colors.dark_primary,
		justifyContent: 'center',
		alignItems: 'center',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
})

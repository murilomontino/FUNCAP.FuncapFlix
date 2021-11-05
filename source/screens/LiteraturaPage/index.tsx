import React from 'react'
import {
	Button,
	Dimensions,
	FlatList,
	StyleSheet,
	View,
	Text,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import data from './data'

const { height } = Dimensions.get('window')

const Literatura = () => {
	const { navigate } = useNavigation()

	return (
		<View style={styles.container}>
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Button
					title="Clique Aqui"
					onPress={() => {
						navigate('PDFView', {
							id: 'domCasmurro',
							title: 'dom casmurro',
							author: 'machado-de-assis',
						})
					}}
				/>
			</View>
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<FlatList
					data={data}
					renderItem={({ item }) => {
						return (
							<View>
								<Text>{item.title}</Text>
							</View>
						)
					}}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	)
}

export default Literatura

const styles = StyleSheet.create({
	container: {
		flex: 1,
		minHeight: height,
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

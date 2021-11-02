import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import colors from 'global/colors'
const { height } = Dimensions.get('window')

const Literatura = () => {
	return <View style={styles.container}></View>
}

export default Literatura

const styles = StyleSheet.create({
	container: {
		minHeight: height,
		backgroundColor: colors.dark_primary,
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
})

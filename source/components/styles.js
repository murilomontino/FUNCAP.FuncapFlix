import { StyleSheet } from 'react-native'

import { theme } from 'global/styles/theme'

const styles = StyleSheet.create({
	containerTextInputs: {
		marginBottom: 8,
	},
	elevationView: {
		backgroundColor: theme.colors.white,
		padding: 20,
		marginHorizontal: 8,
		borderRadius: 2,
		shadowColor: '#000',
		shadowOffset: {
			width: 1,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	buttonStyle: {
		padding: 4,
		margin: 4,
		height: 36,
		backgroundColor: theme.colors.gradient_fourth,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold',
		color: '#fff',
	},
})

export default styles

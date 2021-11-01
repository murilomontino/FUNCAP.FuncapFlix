import React, { createContext, useContext, useState } from 'react'
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native'

import { useAssets } from 'expo-asset'

const { width, height } = Dimensions.get('screen')

type Context = {
	ToastModal: () => JSX.Element
	AlertToast: () => void
}

const ToastContext = createContext<Context>({
	ToastModal: () => {
		return <></>
	},
	AlertToast: () => {
		return
	},
})

const ToastContextProvider: React.FC = ({ children }) => {
	const [visible, setVisible] = useState(false)
	const icon = useAssets([require('../../assets/Alerts/Success.png')])[0]
	const [color, setColor] = useState('tomato')
	const [title, setTitle] = useState('Deu Certo')
	const [text, setText] = useState('Deu muito certo')

	const AlertToast = () => {
		setVisible(true)
		setTimeout(() => {
			setVisible(false)
		}, 10000)
	}

	const ToastModal = () => {
		return (
			<View
				style={[
					styles.toast,
					{
						bottom: 10,
						backgroundColor: color,
					},
				]}
			>
				<View style={[styles.iconStatus]}>
					<Image
						source={require('../../assets/Alerts/Success.png')}
						style={styles.img}
					/>
				</View>
				<View style={styles.content}>
					<Text style={[styles.title]}>{title}</Text>
					<Text style={styles.subtitle}>{text}</Text>
				</View>

				<View style={[styles.timing]} />
			</View>
		)
	}
	return (
		<ToastContext.Provider
			value={{
				ToastModal,
				AlertToast,
			}}
		>
			{children}
			{visible && <ToastModal />}
		</ToastContext.Provider>
	)
}

export default ToastContextProvider

export const useToast = (): Context => {
	return useContext(ToastContext)
}

const styles = StyleSheet.create({
	toast: {
		position: 'absolute',
		width: '90%',
		alignSelf: 'center',
		borderRadius: 5,
		minHeight: 100,
		shadowColor: '#ccc',
		alignItems: 'center',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		flexDirection: 'row',
	},
	timing: {
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 5,
		height: 10,
		width: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		position: 'absolute',
		bottom: 0,
		left: 0,
	},
	content: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	title: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
	},
	subtitle: {
		marginTop: 5,
		fontWeight: '300',
		fontSize: 13,
		color: '#fff',
	},
	img: {
		resizeMode: 'contain',
		width: 20,
		height: 20,
	},
	iconStatus: {
		width: 40,
		height: 40,
		// backgroundColor: '#fff',
		borderRadius: 50,
		marginLeft: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

import React, { useState } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	Button,
	Image,
	Dimensions,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import colors from 'global/colors'
import constants from 'global/constants'

import api from 'services'

const QRCodeScreen = () => {
	const [inputText, setInputText] = useState('')
	const [qrValue, setQrValue] = useState('')
	const { height } = Dimensions.get('window')

	const generateQRCode = async () => {
		const buffer = { url: inputText }
		const { data } = await api.post('qrcode/generate', buffer)

		const base64 = new Buffer(data.data).toString('base64')
		setQrValue(base64)

		return
	}

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colors.white_secondary,

				padding: 48,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<ScrollView style={{ marginTop: constants.headerHight, height: height }}>
				{qrValue && (
					<View style={styles.containerQr}>
						<Image
							source={{
								uri: `data:image/png;base64,${qrValue}`,
							}}
							style={{
								resizeMode: 'contain',
								width: 360,
								height: 360,
							}}
						/>
						{/* <QRCode value={qrValue ? qrValue : 'NA'} size={250} color="black" /> */}
					</View>
				)}
				<View style={styles.container}>
					<Text style={styles.text}>
						Insira qualquer valor para gerar o QR Code
					</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(inputText) => setInputText(inputText)}
						value={inputText}
					/>
					<View style={{ margin: 5 }}>
						<Button onPress={() => generateQRCode()} title="Gerar QR Code" />
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

export default QRCodeScreen

const styles = StyleSheet.create({
	containerQr: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		margin: 5,
	},
	textInput: {
		flexDirection: 'row',
		backgroundColor: 'white',
		textAlign: 'center',
		height: 40,
		marginTop: 20,
		marginLeft: 10,
		marginRight: 10,
		margin: 10,
		borderWidth: 1,
	},
})

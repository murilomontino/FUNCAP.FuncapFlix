import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import { Button } from 'react-native-paper'

import { useFormImage } from 'forms/Product'

const GetImageButton = () => {
	const { getImage, image } = useFormImage()
	return (
		<View
			style={{
				backgroundColor: 'green',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<TouchableHighlight onPress={getImage}>
				<Image
					style={{
						width: 100,
						height: 150,
						resizeMode: 'stretch',
						borderWidth: 2,
					}}
					defaultSource={require('assets/not-image.png')}
					source={{ uri: `${image.uri}` }}
				/>
			</TouchableHighlight>
			<Button onPress={getImage}>Escolher uma Capa</Button>
		</View>
	)
}

export default GetImageButton

const styles = StyleSheet.create({})

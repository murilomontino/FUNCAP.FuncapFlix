import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useDimensions } from 'react-native-web-hooks'

import FormProductProvider from 'forms/Product'

import GetImageButton from './components/atoms/get-image-button'
import GetPDFButton from './components/atoms/get-pdf-button'
import MultipleSelectedGenero from './components/atoms/multiple-selected-genero'
import SendFormButtonProduct from './components/atoms/send-form-button-product'

const AddBook = () => {
	const { window } = useDimensions()

	return (
		<FormProductProvider>
			<View
				style={{
					minHeight: window.height,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
					}}
				>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'white',
							maxWidth: 300,
						}}
					>
						<GetImageButton />
						<GetPDFButton />
						<MultipleSelectedGenero />
					</View>
					<View>
						<TextInput />
					</View>
				</View>
				<SendFormButtonProduct />
			</View>
		</FormProductProvider>
	)
}

export default AddBook

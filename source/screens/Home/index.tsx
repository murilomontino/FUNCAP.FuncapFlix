import React, { useState } from 'react'
import { Platform, ImageBackground, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import home from './home_slide.json'

const Home = () => {
	const web = Platform.OS === 'web'
	const { window } = useDimensions()

	const width = window.width
	const height = window.height

	const [items, setItems] = useState(home.items)

	return (
		<ImageBackground
			source={items[0].snippet.thumbnails.maxres?.url}
			resizeMode="cover"
			style={[
				{
					flex: 1,
					justifyContent: 'center',
					width: width,
					height: height,
				},
			]}
		>
			<View
				style={{
					width: width,
					height: height,
				}}
			></View>
		</ImageBackground>
	)
}

export default Home

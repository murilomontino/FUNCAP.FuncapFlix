import React from 'react'
import { View, Dimensions } from 'react-native'

import { Platform } from 'expo-modules-core'

import constants from 'global/constants'

import ScrollProvider from 'components/context/ContextScroll'
import Footer from 'components/organism/Footer'
import Header from 'components/organism/Header'
import DrawerProvider from 'context/DrawerMenu'

const Front: React.FC = ({ children }) => {
	const web = Platform.OS === 'web'
	const { height } = Dimensions.get(web ? 'window' : 'screen')
	const minHeight = height - constants.footerHight

	return (
		<DrawerProvider>
			<Header />

			<ScrollProvider>
				<View
					style={{
						flex: 1,
						minHeight: minHeight,
						marginBottom: 90,
					}}
				>
					{children}
				</View>
				<Footer />
			</ScrollProvider>
		</DrawerProvider>
	)
}

export default Front

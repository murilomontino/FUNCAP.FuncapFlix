import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useLayout } from 'react-native-web-hooks'

import colors from 'global/colors'
import constants from 'global/constants'

import Logo from 'components/atom/LogoFuncap'
import LogoFuncapVertical from 'components/atom/LogoFuncapVertical'
import LogoGoverno from 'components/atom/LogoGoverno'
import AboutFooter from 'components/molecule/AboutFooter'

const Footer = () => {
	const [sizeNavBar, setSizeNavBar] = useState(false)
	const { onLayout, width } = useLayout()

	useEffect(() => {
		if (width < 720) {
			setSizeNavBar(true)
		} else {
			setSizeNavBar(false)
		}
	}, [width])

	// 720

	return (
		<View
			onLayout={onLayout}
			style={{
				position: 'absolute',
				flexDirection: 'row',
				flex: 1,
				bottom: 0,
				height: constants.footerHight,
				width: '100%',
				backgroundColor: colors.dark_secondary,
			}}
		>
			<View
				style={{
					flex: 2,
					flexDirection: 'column',
					paddingVertical: 42,
					paddingLeft: 34,
				}}
			>
				<AboutFooter />
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
				}}
			></View>

			<View
				style={{
					flex: 2,
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
					flexDirection: 'row',
				}}
			>
				{!sizeNavBar ? <LogoFuncapVertical size={8} /> : <Logo size={4} />}
				<LogoGoverno size={!sizeNavBar ? 8 : 4} textVisible={!sizeNavBar} />
			</View>
		</View>
	)
}

export default Footer

const styles = StyleSheet.create({})

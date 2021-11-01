import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useLayout } from 'react-native-web-hooks'

import colors from 'global/colors'
import constants from 'global/constants'

import ButtonLogin from 'components/atom/ButtonLogin'
import ButtonOpenMenu from 'components/atom/ButtonOpenMenu'
import LogoMapaCultural from 'components/atom/LogoMapaCultural'
import NavBar from 'components/molecule/NavBar'

const Header = () => {
	const [sizeNavBar, setSizeNavBar] = useState(false)
	const { onLayout, width } = useLayout()

	useEffect(() => {
		if (width < 1127) {
			setSizeNavBar(true)
		} else {
			setSizeNavBar(false)
		}
	}, [width])

	// 1127

	return (
		<View
			onLayout={onLayout}
			style={[
				styles.container,
				{
					width: !sizeNavBar ? '98.8%' : '100%',
					zIndex: 1,
					alignItems: 'center',
				},
			]}
		>
			{!sizeNavBar ? (
				<>
					<LogoMapaCultural />
					<NavBar />
					<ButtonLogin />
				</>
			) : (
				<>
					<ButtonOpenMenu />
					<LogoMapaCultural />
					<ButtonLogin textVisible={false} />
				</>
			)}
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		flex: 1,
		elevation: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		shadowColor: '#fff',
		shadowOffset: {
			width: 1,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		position: 'absolute',
		top: 0,
		height: constants.headerHight,
		backgroundColor: colors.dark_primary,
	},
})

import React from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useScaledSize } from 'react-native-web-hooks'

import colors from 'global/colors'

type Props = {
	textVisible?: boolean
}

const ButtonLogin: React.FC<Props> = ({ textVisible = true }) => {
	const handleClickURL = async () => {
		await Linking.openURL('https://funcap.mapacultural.acesso.se.gov.br/')
	}

	const fontSize = useScaledSize(0.7)
	const iconSize = useScaledSize(1.2)

	return (
		<TouchableOpacity
			onPress={handleClickURL}
			style={{
				padding: 12,
				marginRight: 4,
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			<Icon
				size={iconSize}
				color={colors.white}
				style={{ padding: 8 }}
				tvParallaxProperties
				name="login"
			/>
			{textVisible && (
				<Text
					style={{
						color: colors.white,
						padding: 8,
						fontSize: fontSize,
						fontWeight: 'bold',
					}}
				>
					Entrar
				</Text>
			)}
		</TouchableOpacity>
	)
}

export default ButtonLogin

const styles = StyleSheet.create({})

import React, { useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, FontVariant } from 'react-native'
import { useHover, useScaledSize } from 'react-native-web-hooks'

type Props = {
	title: string
	link?: string
	select?: boolean
	fontVariant?: FontVariant
}

const ItemNavBar: React.FC<Props> = ({
	title,
	link,
	select = true,
	fontVariant = 'small-caps',
}) => {
	const ref = useRef(null)
	const hover = useHover(ref)

	const fontSize = useScaledSize(0.7)

	return (
		<a href={link} style={{ textDecoration: 'none' }}>
			<TouchableOpacity style={styles.buttonNav}>
				<Text
					ref={ref}
					style={[
						{ fontSize, fontVariant: [fontVariant] },
						styles.textNav,
						select && hover && styles.hoverText,
					]}
				>
					{title}
				</Text>
			</TouchableOpacity>
		</a>
	)
}

export default ItemNavBar

const styles = StyleSheet.create({
	textNav: {
		color: '#fff',
		fontWeight: '700',
	},
	hoverText: {
		color: 'orange',
		fontWeight: 'bold',
	},
	buttonNav: {
		padding: 4,
		marginHorizontal: 4,
	},
	selectText: {},
})

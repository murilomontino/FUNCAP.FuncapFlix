import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import faker from 'faker'
import { ProductsAttributes } from 'types/Products'

import { useBooks } from 'components/context/ContextBooks'
import { useScroll } from 'components/context/ContextScroll'

type Props = {
	item: ProductsAttributes
}

faker.setLocale('pt_BR')

const CardBooks = ({ item }: Props) => {
	const { changeBook } = useBooks()
	const { scrollTop } = useScroll()
	const redirectBookID = (item: ProductsAttributes) => {
		scrollTop()
		changeBook(item.arquivo)
	}
	return (
		<View
			style={{
				flex: 1,
				flexDirection: 'row',
				padding: 20,
				marginHorizontal: 20,
				marginVertical: 8,
				minHeight: 100,
				backgroundColor: '#fff',
				elevation: 5,
				shadowColor: '#fff',
				shadowOffset: {
					width: 1,
					height: 2,
				},
				shadowOpacity: 0.4,
				shadowRadius: 4,
			}}
		>
			<View
				style={{
					elevation: 5,
					maxHeight: 150,
					shadowColor: '#000',
					shadowOffset: {
						width: 1,
						height: 2,
					},
					shadowOpacity: 1,
					shadowRadius: 4,
				}}
			>
				<Image
					style={{
						resizeMode: 'cover',
						width: 100,
						height: 150,
					}}
					source={{
						uri: 'data:image/jpeg;base64,' + item.capa,
					}}
				/>
			</View>
			<View
				style={{
					flex: 1,
					padding: 12,
					width: '100%',
					flexWrap: 'wrap',
				}}
			>
				<View>
					<Text
						style={{
							fontVariant: ['small-caps'],
							fontWeight: 'bold',
							fontSize: 16,
						}}
					>
						{item.titulo}
					</Text>
					<Text>{faker.name.firstName() + ' ' + faker.name.lastName()}</Text>
				</View>
				<View>
					<Text
						style={{
							fontFamily: 'Helvética',
						}}
					>
						{faker.lorem.paragraph()}
					</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity>
						<Text style={{ color: '#000', padding: 4 }}>Ver mais</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							redirectBookID(item)
						}}
					>
						<Text style={{ color: '#000', padding: 4 }}>Ler</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default CardBooks

const styles = StyleSheet.create({})

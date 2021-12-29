import React from 'react'
import { View, Text, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { generos } from '@/types'
import { ProductBook } from '@/types/generic/Products'

import GenerosLiterarios from '../../atoms/generos-literarios'
import { textStyles, viewStyles } from '../../styles'

type Props = {
  item: ProductBook
}

const BookBasicInformation = ({ item }: Props) => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  return (
    <View
      style={[
        viewStyles.viewHeader,
        size.width < 1127 && {
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      <View
        style={[
          viewStyles.viewAttributes,
          {
            alignItems: 'center',
          },
        ]}
      >
        <Text
          style={[textStyles.attrText, { fontWeight: '700', fontSize: 12 }]}
        >
          {item.titulo}
        </Text>
        {item.sub_titulo && (
          <Text
            style={[textStyles.attrText, { fontWeight: '700', fontSize: 12 }]}
          >
            {'-'} {item.sub_titulo}
          </Text>
        )}
      </View>
      <View
        style={[
          viewStyles.viewAttributes,
          {
            alignItems: 'center',
          },
        ]}
      >
        <Text
          style={[
            textStyles.attrText,
            { fontWeight: 'bold', textAlignVertical: 'center' },
          ]}
        >
          Genero:{' '}
        </Text>
        <GenerosLiterarios generos={item.genero as unknown as generos[]} />
      </View>
    </View>
  )
}

export default BookBasicInformation

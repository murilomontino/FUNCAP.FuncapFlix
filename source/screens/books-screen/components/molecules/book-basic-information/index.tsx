import React from 'react'
import { View, Text, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { GetterBooks } from '@/types'

import GenerosLiterarios from '../../atoms/generos-literarios'
import { textStyles, viewStyles } from '../../styles'

type Props = {
  item: GetterBooks
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
        {item.subTitulo ? (
          <Text
            style={[textStyles.attrText, { fontWeight: '700', fontSize: 12 }]}
          >
            {'-'} {item.subTitulo}
          </Text>
        ) : (
          <></>
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
        <GenerosLiterarios generos={item.generos} />
      </View>
    </View>
  )
}

export default BookBasicInformation

import React from 'react'
import { Platform, Text, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import MenuOfPhotos from '../menu-of-photos'

import colors from '@/global/colors'

const Details = () => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  return (
    <View
      style={{
        height: '100%',
        width: '70%',
        flex: 2.5,
        minHeight: size.height,
        marginBottom: 120,
        borderRightWidth: size.width < 1127 ? 0 : 1,
        borderRightColor: '#01010',
        borderLeftWidth: size.width < 1127 ? 0 : 1,
        borderLeftColor: '#01010',
        marginRight: 8,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 8,
          color: colors.redSecondary,
        }}
      >
        * Campos Obrigatórios
      </Text>
      <MenuOfPhotos />
    </View>
  )
}

export default Details

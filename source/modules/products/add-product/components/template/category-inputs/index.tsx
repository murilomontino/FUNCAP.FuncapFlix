import React from 'react'
import { Platform, Text, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { useFormProductCategory } from '@/forms/Product/hooks'

import Details from '../../organims/details'
import Left from '../../organims/left'
import Right from '../../organims/right'

import colors from '@/global/colors'
import constants from '@/global/constants'

const CategoryInputs = () => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  const { category } = useFormProductCategory()

  if (!category) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: constants.fontSize.xxlarge,
            fontWeight: 'bold',
            color: colors.white,
            marginBottom: constants.footerHight,
          }}
        >
          Selecione uma Categoria
        </Text>
      </View>
    )
  }

  return (
    <View
      style={[
        {
          flex: 1,
          marginTop: 40,
          padding: 40,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginBottom: constants.footerHight,
        },
        size.width < 1127 && {
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      ]}
    >
      <Left />
      <Details />
      <Right />
    </View>
  )
}

export default CategoryInputs

import React, { useEffect } from 'react'
import { ImageBackground, Platform, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { Category } from '@/types'

import FormProductProvider from '@/forms/Product'

import io from '@/services/config/socket'

import HeaderLogo from './components/molecules/header-logo'
import Details from './components/organims/details'
import Left from './components/organims/left'
import Right from './components/organims/right'

import colors from '@/global/colors'
import constants from '@/global/constants'

type Props = {
  category: Category
}

const AddProduct = ({ category }: Props) => {
  useEffect(() => {
    io.connect()
    return () => {
      io.disconnect()
    }
  }, [])

  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  return (
    <FormProductProvider initialCategory={category}>
      <ImageBackground
        source={require('@/assets/background-image.png')}
        resizeMode="cover"
        style={{
          backgroundColor: colors.button,
          width: window.width,
          minHeight: window.height,
          marginTop: constants.headerHight,
          padding: web ? 0 : 20,
        }}
      >
        <HeaderLogo />
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
      </ImageBackground>
    </FormProductProvider>
  )
}

export default AddProduct

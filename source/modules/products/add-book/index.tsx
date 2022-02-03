import React from 'react'
import { ImageBackground, Platform, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import HeaderLogo from '@/components/atom/header-logo'

import FormBookProvider from '@/forms/Product/product-book'

import Details from './components/organims/details'
import Left from './components/organims/left'
import Right from './components/organims/right'

import colors from '@/global/colors'

const ModuleAddBook = () => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  return (
    <FormBookProvider>
      <ImageBackground
        source={require('@/assets/background-image.png')}
        resizeMode="cover"
        style={{
          backgroundColor: colors.button,
          width: window.width,
          minHeight: window.height,
          paddingTop: 80,
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
    </FormBookProvider>
  )
}

export default ModuleAddBook

import React from 'react'
import { ImageBackground, Platform, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import ResetContextProvider from '@/context/ResetModal'

import HeaderLogo from '@/components/atom/header-logo'

import FormExhibitionProvider from '@/forms/Product/product-exhibition'

import Details from './components/organism/details'
import Left from './components/organism/left'

import colors from '@/global/colors'

const ModuleAddBook = () => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  return (
    <ResetContextProvider>
      <FormExhibitionProvider>
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
          </View>
        </ImageBackground>
      </FormExhibitionProvider>
    </ResetContextProvider>
  )
}

export default ModuleAddBook

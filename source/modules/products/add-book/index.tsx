import React from 'react'
import { ImageBackground, View } from 'react-native'

import HeaderLogo from '@/components/atom/header-logo'

import FormBookProvider from '@/forms/Product/product-book'

import Main from './components/template/main'

import colors from '@/global/colors'
import { useSize } from '@/hooks/use-size'

const ModuleAddBook = () => {
  const { size, web } = useSize()

  return (
    <FormBookProvider>
      <ImageBackground
        source={require('@/assets/background-image.png')}
        resizeMode="cover"
        style={{
          backgroundColor: colors.button,
          width: size.width,
          minHeight: size.height,
          paddingTop: 80,
          padding: web ? 0 : 20,
        }}
      >
        <HeaderLogo />
        <View
          style={{
            minHeight: size.height,
          }}
        >
          <Main />
        </View>
      </ImageBackground>
    </FormBookProvider>
  )
}

export default ModuleAddBook

import React from 'react'
import { ImageBackground } from 'react-native'

import theme from '@/theme'
import { View } from 'moti'

import HeaderLogo from '@/components/atom/header-logo'

import FormExhibitionProvider from '@/forms/Product/product-exhibition'

import Main from './components/template/main'

import colors from '@/global/colors'
import { useSize } from '@/hooks/use-size'

const ModuleAddBook = () => {
  const { size, web } = useSize()

  return (
    <FormExhibitionProvider>
      <ImageBackground
        source={require('@/assets/background-image.png')}
        resizeMode="cover"
        style={{
          flex: 1,
          backgroundColor: colors.button,
          width: size.width,
          minHeight: size.height,
        }}
      >
        <View style={{ marginTop: theme.CONSTANTS.HEADER_HIGHT }}>
          <HeaderLogo />
        </View>
        <Main />
      </ImageBackground>
    </FormExhibitionProvider>
  )
}

export default ModuleAddBook

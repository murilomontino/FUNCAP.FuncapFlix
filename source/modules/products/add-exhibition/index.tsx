import React from 'react'
import { ImageBackground } from 'react-native'

import ResetContextProvider from '@/context/ResetModal'

import HeaderLogo from '@/components/atom/header-logo'

import FormExhibitionProvider from '@/forms/Product/product-exhibition'

import Main from './components/template/main'

import colors from '@/global/colors'
import { useSize } from '@/hooks/use-size'

const ModuleAddBook = () => {
  const { size, web } = useSize()

  return (
    <ResetContextProvider>
      <FormExhibitionProvider>
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
          <Main />
        </ImageBackground>
      </FormExhibitionProvider>
    </ResetContextProvider>
  )
}

export default ModuleAddBook

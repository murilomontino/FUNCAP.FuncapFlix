import React from 'react'
import { ImageBackground } from 'react-native'

import ResetContextProvider from '@/context/ResetModal'

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
            flex: 1,
            backgroundColor: colors.button,
            width: size.width,
            minHeight: size.height,
          }}
        >
          <Main />
        </ImageBackground>
      </FormExhibitionProvider>
    </ResetContextProvider>
  )
}

export default ModuleAddBook

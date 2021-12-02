import React from 'react'
import { ImageBackground, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import FormProductProvider from 'forms/Product'
import colors from 'global/colors'
import constants from 'global/constants'

import DropdownCategories from './components/atoms/dropdown-categories'
import HeaderLogo from './components/molecules/header-logo'
import CategoryInputs from './components/template/category-inputs'

const AddBook = () => {
  const { window } = useDimensions()

  const web = Platform.OS === 'web'

  return (
    <FormProductProvider>
      <ImageBackground
        source={require('assets/background-image.png')}
        resizeMode="cover"
        style={{
          backgroundColor: colors.button,
          width: window.width,
          marginTop: constants.headerHight,
          padding: web ? 0 : 20,
        }}
      >
        <HeaderLogo />
        <DropdownCategories />
        <CategoryInputs />
      </ImageBackground>
    </FormProductProvider>
  )
}

export default AddBook

import React from 'react'
import { View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import FormProductProvider from 'forms/Product'
import constants from 'global/constants'

import GetImageButton from './components/atoms/get-image-button'
import GetPDFButton from './components/atoms/get-pdf-button'
import InputSubTitle from './components/atoms/input-subtitle'
import InputTitle from './components/atoms/input-title'
import MultipleSelectedGenero from './components/atoms/multiple-selected-genero'
import SendFormButtonProduct from './components/atoms/send-form-button-product'
import TextAreaResumo from './components/atoms/text-area-resumo'

const AddBook = () => {
  const { window } = useDimensions()

  return (
    <FormProductProvider>
      <View
        style={{
          width: window.width,
          backgroundColor: '#f1f1f1',
          minHeight: window.height,
          marginTop: constants.headerHight,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'space-around',
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              maxWidth: 300,
              minHeight: window.height,
            }}
          >
            <GetImageButton />
            <GetPDFButton />
            <MultipleSelectedGenero />
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <InputTitle />
            <InputSubTitle />
            <TextAreaResumo />
          </View>
        </View>
        <SendFormButtonProduct />
      </View>
    </FormProductProvider>
  )
}

export default AddBook

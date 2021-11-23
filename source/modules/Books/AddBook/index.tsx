import React from 'react'
import { Platform, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import FormProductProvider from 'forms/Product'
import constants from 'global/constants'

import GetImageButton from './components/atoms/get-image-button'
import GetPDFButton from './components/atoms/get-pdf-button'
import MultipleSelectedGenero from './components/atoms/multiple-selected-genero'
import SendFormButtonProduct from './components/atoms/send-form-button-product'
import InputTags from './components/atoms/tags'
import InputsForms from './components/molecules/inputs-forms'

const AddBook = () => {
  const { window } = useDimensions()

  const web = Platform.OS === 'web'

  return (
    <FormProductProvider>
      <View
        style={{
          backgroundColor: '#f1f1f1',
          width: window.width,
          minHeight: window.height,
          marginTop: constants.headerHight,
          marginBottom: constants.footerHight,
        }}
      >
        <View
          style={{
            flex: 1,
            marginTop: 40,
            flexDirection: window.width < 1127 ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: window.width < 1127 ? 'center' : 'flex-start',
          }}
        >
          <View
            style={{
              flex: 1,
              maxWidth: 200,
              minHeight: window.height,
            }}
          >
            <GetImageButton />
            <GetPDFButton />
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: 'flex-start',
              width: '80%',
              alignItems: 'center',
            }}
          >
            <InputsForms />
          </View>
          <View
            style={{
              flex: 1,
              marginRight: 40,
              padding: 8,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <MultipleSelectedGenero />
            <InputTags />
            <SendFormButtonProduct />
          </View>
        </View>
      </View>
    </FormProductProvider>
  )
}

export default AddBook

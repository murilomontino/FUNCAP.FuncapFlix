import React from 'react'
import { View, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import SendFormButtonProduct from '../../atoms/send-form-button-product'
import InputTags from '../../atoms/tags'

const Right = () => {
  const web = Platform.OS === 'web'
  const { window } = useDimensions()

  return (
    <View
      style={{
        flex: 1,
        marginRight: web ? 0 : 40,
        padding: 8,
        maxWidth: 300,
        minHeight: window.width < 1127 ? 400 : window.height,
        borderLeftWidth: window.width < 1127 ? 0 : 1,
        borderColor: 'rgba(0,0,0, 0.4)',
      }}
    >
      <InputTags />
      <SendFormButtonProduct />
    </View>
  )
}

export default Right

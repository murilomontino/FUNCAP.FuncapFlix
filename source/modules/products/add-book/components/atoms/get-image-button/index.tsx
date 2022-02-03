import React from 'react'
import { Image, TouchableHighlight, View } from 'react-native'
import { Button } from 'react-native-paper'

import { useFormBookImage } from '@/forms/Product/product-book/hooks'

import { styles } from '../styles'

const GetImageButton = () => {
  const { getImage, image } = useFormBookImage()
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableHighlight
        style={{
          marginBottom: 8,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 4,
        }}
        onPress={getImage}
      >
        <Image
          style={{
            width: 150,
            height: 200,
            resizeMode: 'cover',
          }}
          defaultSource={require('@/assets/not-image.png')}
          source={{ uri: `${image.uri}` }}
        />
      </TouchableHighlight>
      <Button style={[styles.buttonContainer]} color="#fff" onPress={getImage}>
        {image.name || 'Escolher uma Capa'}
      </Button>
    </View>
  )
}

export default GetImageButton

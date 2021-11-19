import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import { Button } from 'react-native-paper'

import { useFormImage } from 'forms/Product'

const GetImageButton = () => {
  const { getImage, image } = useFormImage()
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableHighlight onPress={getImage}>
        <Image
          style={{
            width: 150,
            height: 250,
            marginTop: 20,
            resizeMode: 'stretch',
            borderWidth: 2,
          }}
          defaultSource={require('assets/not-image.png')}
          source={{ uri: `${image.uri}` }}
        />
      </TouchableHighlight>
      <Button onPress={getImage}>{image.name || 'Escolher uma Capa'}</Button>
    </View>
  )
}

export default GetImageButton

const styles = StyleSheet.create({})

import React, { MutableRefObject, useState } from 'react'
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native'
import { Button } from 'react-native-paper'

import * as DocumentPicker from 'expo-document-picker'

import { Document } from '@/forms/Product/types'

import colors from '@/global/colors'

type Props = {
  image: MutableRefObject<Document>
  onChangeImage: (value: Document) => void
  width?: number
  height?: number
  placeholder?: string
}

const GetImageButton = ({
  image,
  onChangeImage,
  width = 150,
  height = 200,
  placeholder = 'Escolher uma Capa',
}: Props) => {
  const [imageState, setImageState] = useState<DocumentPicker.DocumentResult>(
    () => {
      if (image && image.current) {
        return {
          name: image.current.name,
          type: image.current.type,
          uri: image.current.uri,
        }
      }
      return null
    }
  )

  const onPress = async () => {
    const img = await DocumentPicker.getDocumentAsync({
      type: ['image/png', 'image/jpeg', 'image/jpg'],
    })

    if (img.type === 'success') {
      setImageState({
        name: img.name,
        type: img.type,
        mimeType: img.mimeType,
        uri: img.uri,
      })
      onChangeImage({
        name: img.name,
        mimeType: img.mimeType,
        type: img.type,
        uri: img.uri,
      })
    }
  }

  const imageStyle: StyleProp<ImageStyle> = {
    width: width,
    height: height,
    resizeMode: 'cover',
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.imageButton} onPress={onPress}>
        <Image
          style={imageStyle}
          defaultSource={require('@/assets/not-image.png')}
          source={{
            uri: imageState?.type === 'success' ? `${imageState?.uri}` : '',
          }}
        />
      </TouchableHighlight>
      <Button style={[styles.buttonContainer]} color="#fff" onPress={onPress}>
        {imageState?.type === 'success' ? imageState?.name : placeholder}
      </Button>
    </View>
  )
}

export default GetImageButton

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: colors.button_secondary,
    borderRadius: 4,
    width: 250,
    height: 50,
    margin: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: colors.grey20,
  },
  imageButton: {
    marginBottom: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
})

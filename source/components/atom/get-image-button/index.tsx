import React, { useEffect, useState } from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'

import * as DocumentPicker from 'expo-document-picker'

import { Document } from '@/forms/Product/types'

import Button from '../button'
import { Container, ImageButton } from './styles'

type Props = {
  image: Document
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
  const [imageState, setImageState] = useState<Document>(() => {
    if (image) {
      return {
        name: image.name,
        type: image.type,
        uri: image.uri,
      }
    }
    return null
  })

  useEffect(() => {
    if (image) {
      setImageState(image)
    }
  }, [image])

  const onPress = async () => {
    const img = await DocumentPicker.getDocumentAsync({
      type: ['image/png', 'image/jpeg', 'image/jpg'],
    })

    if (img.type && img.type === 'success') {
      setImageState({
        name: img.name,
        type: img.type,
        uri: img.uri,
      })
      onChangeImage({
        name: img.name,
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
    <Container>
      <ImageButton
        style={{
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 4,
        }}
        onPress={onPress}
      >
        <Image
          style={imageStyle}
          defaultSource={require('@/assets/not-image.png')}
          source={{
            uri: imageState?.type === 'success' ? `${imageState?.uri}` : '',
          }}
        />
      </ImageButton>
      <Button
        text={imageState?.type === 'success' ? imageState?.name : placeholder}
        onPress={onPress}
      />
    </Container>
  )
}

export default GetImageButton

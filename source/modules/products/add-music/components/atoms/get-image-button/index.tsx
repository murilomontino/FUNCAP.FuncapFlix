import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import { Button } from 'react-native-paper'

import { useFormMusicImage } from '@/forms/Product/product-music/hooks'
import { Document } from '@/forms/Product/types'

import colors from '@/global/colors'

type Props = {
  onChangeImage: () => Promise<boolean>
  image: Document
}

const GetImageButton = (_params: Props) => {
  const { getImage, image } = useFormMusicImage()

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
            width: 200,
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
export const styles = StyleSheet.create({
  textAreaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    margin: 8,
    alignContent: 'center',
  },
  topicForm: {
    fontWeight: 'bold',
    color: '#f1f1f1',
    padding: 8,
    textAlign: 'right',
  },
  viewTitle: {
    flex: 1,
    maxWidth: 150,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textArea: {
    color: colors.grey20,
    fontWeight: '500',
    backgroundColor: '#d9d9d9',
    padding: 8,
    borderRadius: 8,
    borderWidth: 0.2,
    borderColor: colors.grey20,
    flex: 3,
  },
  outlineWeb: {
    outlineColor: 'orange',
    //outlineOffset: ? NumberOrString,
    //outlineStyle: ? string,
    outlineRightWidth: 0,
    outlineWidth: 1,
  },
  outline: {},
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
})

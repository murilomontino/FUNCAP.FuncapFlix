import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Category, TypeMusicAlbuns } from '@/types'

import Dropdown from '@/components/atom/dropdown'

import {
  useFormMusic,
  useFormMusicContent,
} from '@/forms/Product/product-music/hooks'

import GetFileButton from '../../atoms/get-file-button'
import InputTopic from '../../atoms/input-topic'

const InputsFormsMusic = () => {
  const { titleMusics, onChangeTitleMusics, titleAlbum, onChangeTitleAlbum } =
    useFormMusic()
  const { content, onChangeContent } = useFormMusicContent()

  const ContentMusicItems = [
    { value: TypeMusicAlbuns.album, label: 'Álbum' },
    { value: TypeMusicAlbuns.single, label: 'Single' },
    { value: TypeMusicAlbuns.ep, label: 'EP' },
    { value: TypeMusicAlbuns.album_interprete, label: 'Álbum Interprete' },
  ]

  return (
    <View>
      <Dropdown
        items={ContentMusicItems}
        onChangeValue={onChangeContent}
        value={content}
      />
      {content && <GetFileButton category={Category.Music} />}
      <InputTopic
        topic="Título da Obra"
        onChangeText={onChangeTitleAlbum}
        value={titleAlbum}
        styleViewContainer={{
          width: '90%',
        }}
      />
      {titleMusics.map((item, index) => (
        <InputTopic
          topic={`Faixa ${index + 1 > 9 ? '' : 0}${index + 1}`}
          key={index}
          onChangeText={(text) => onChangeTitleMusics(text, index)}
          value={item}
          styleViewContainer={{
            maxWidth: '90%',
          }}
        />
      ))}
    </View>
  )
}

export default InputsFormsMusic

const styles = StyleSheet.create({})

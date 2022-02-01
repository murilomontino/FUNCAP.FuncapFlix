import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Platform } from 'expo-modules-core'

import { Category, TypeMusicAlbuns } from '@/types'

import Dropdown from '@/components/atom/dropdown'

import {
  useFormMusic,
  useFormMusicContent,
  useFormMusicDurations,
  useFormMusicsFile,
} from '@/forms/Product/product-music/hooks'

import GetFileButton from '../../atoms/get-file-button'
import InputTopic from '../../atoms/input-topic'
import CardMusicForm from '../card-music-form'

const InputsFormsMusic = () => {
  const { titleMusics, onChangeTitleMusics, titleAlbum, onChangeTitleAlbum } =
    useFormMusic()
  const { onChangeDurations } = useFormMusicDurations()
  const { content, onChangeContent } = useFormMusicContent()
  const { file } = useFormMusicsFile()

  const ContentMusicItems = [
    { value: TypeMusicAlbuns.album, label: 'Álbum' },
    { value: TypeMusicAlbuns.single, label: 'Single' },
    { value: TypeMusicAlbuns.ep, label: 'EP' },
    { value: TypeMusicAlbuns.album_interprete, label: 'Álbum Interprete' },
  ]

  const web = Platform.OS === 'web'

  return (
    <View>
      <Dropdown
        items={ContentMusicItems}
        onChangeValue={onChangeContent}
        value={content}
      />
      <GetFileButton category={Category.Music} />
      <InputTopic
        topic="Título da Obra*"
        onChangeText={onChangeTitleAlbum}
        value={titleAlbum}
        styleViewContainer={{
          width: '90%',
        }}
      />
      {titleMusics.map((item, index) => (
        <CardMusicForm
          key={item}
          index={index}
          item={item}
          uri={file[index].uri}
        />
      ))}
    </View>
  )
}

export default InputsFormsMusic

const styles = StyleSheet.create({})

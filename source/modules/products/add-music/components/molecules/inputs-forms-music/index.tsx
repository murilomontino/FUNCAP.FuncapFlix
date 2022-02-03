import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import { TypeMusicAlbuns } from '@/types'

import Dropdown from '@/components/atom/dropdown'
import InputTopic from '@/components/atom/input-topic'

import {
  useFormMusic,
  useFormMusicContent,
  useFormMusicsFile,
} from '@/forms/Product/product-music/hooks'

import GetFileButton from '../../atoms/get-file-button'
import CardMusicForm from '../card-music-form'

const InputsFormsMusic = () => {
  const { titleAlbum, onChangeTitleAlbum } = useFormMusic()
  const { content, onChangeContent } = useFormMusicContent()
  const { file } = useFormMusicsFile()

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
        requered
        label={'Tipo de conteúdo'.toUpperCase()}
      />
      <GetFileButton message="Escolher Músicas" />
      <InputTopic
        topic="Título da Obra"
        onChangeText={onChangeTitleAlbum}
        requered
        value={titleAlbum}
        styleViewContainer={{
          width: '90%',
        }}
      />

      <FlatList
        data={file}
        renderItem={({ item, index }) => (
          <CardMusicForm key={index} index={index} uri={item.uri} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default InputsFormsMusic

const styles = StyleSheet.create({})

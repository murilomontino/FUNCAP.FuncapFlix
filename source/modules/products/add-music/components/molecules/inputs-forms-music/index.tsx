import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import { TypeMusicAlbums } from '@/types'

import Dropdown from '@/components/atom/dropdown'
import InputTopic from '@/components/molecule/input-topic'

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
  const { mapFiles } = useFormMusicsFile()

  const ContentMusicItems = [
    { value: TypeMusicAlbums.album, label: 'Álbum' },
    { value: TypeMusicAlbums.single, label: 'Single' },
    { value: TypeMusicAlbums.ep, label: 'EP' },
    { value: TypeMusicAlbums.album_interprete, label: 'Álbum Interprete' },
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
        data={mapFiles}
        renderItem={({ item, index }) => (
          <CardMusicForm
            key={index}
            index={index}
            uri={item.get('uri')}
            composer={item.get('compositor')}
            duration={item.get('duracao')}
            title={item.get('titulo')}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default InputsFormsMusic

const styles = StyleSheet.create({})

import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Category, ContentMusic } from '@/types/Products'

import Dropdown from '@/components/atom/dropdown'

import {
  useFormMusic,
  useFormMusicContent,
} from '@/forms/Product/product-music/hooks'

import GetFileButton from '../../atoms/get-file-button'
import InputTopic from '../../atoms/input-topic'

const InputsFormsMusic = () => {
  const { titleMusic, onChangeTitleMusic } = useFormMusic()
  const { content, onChangeContent } = useFormMusicContent()

  const ContentMusicItems = [
    { value: ContentMusic.Album, label: 'Álbum' },
    { value: ContentMusic.Single, label: 'Single' },
    { value: ContentMusic.Ep, label: 'EP' },
    { value: ContentMusic.Interprete, label: 'Álbum Interprete' },
  ]

  return (
    <View>
      <Dropdown
        items={ContentMusicItems}
        onChangeValue={onChangeContent}
        value={content}
      />
      {content && <GetFileButton category={Category.Music} />}
      {titleMusic.map((item, index) => (
        <InputTopic
          topic={`Faixa ${index + 1 > 9 ? '' : 0}${index + 1}`}
          key={index}
          onChangeText={(text) => onChangeTitleMusic(text, index)}
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

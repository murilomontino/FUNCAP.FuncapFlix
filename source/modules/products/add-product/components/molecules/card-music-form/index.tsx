import React from 'react'
import { View, Platform, TouchableHighlight } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import AudioPlayer from '@/components/organism/audio-player'

import {
  removeFormMusic,
  useFormMusic,
  useFormMusicComposers,
  useFormMusicDurations,
} from '@/forms/Product/product-music/hooks'

import InputTopic from '../../atoms/input-topic'

type Props = {
  index: number
  item: string
  uri: string
}

const CardMusicForm = ({ index, item, uri }: Props) => {
  const web = Platform.OS === 'web'

  const { onChangeTitleMusics } = useFormMusic()
  const { onChangeDurations } = useFormMusicDurations()
  const { onRemoveMusic } = removeFormMusic()
  const { onChangeComposers, composers } = useFormMusicComposers()

  return (
    <View
      key={item}
      style={{
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        margin: 10,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <InputTopic
          topic={`Faixa ${index + 1 > 9 ? '' : 0}${index + 1}`}
          key={index}
          onChangeText={(text) => onChangeTitleMusics(text, index)}
          value={item}
          styleViewContainer={{
            maxWidth: '90%',
          }}
        />
        <TouchableHighlight onPress={() => onRemoveMusic(index)}>
          <AntDesign name="close" size={24} color="#fff" />
        </TouchableHighlight>
      </View>
      <InputTopic
        topic={`Compositores`}
        key={index}
        onChangeText={(text) => onChangeComposers(text, index)}
        value={composers[index]}
        styleViewContainer={{
          maxWidth: '90%',
        }}
      />
      {web && (
        <View
          style={{
            alignSelf: 'center',
            marginBottom: 8,
          }}
        >
          <AudioPlayer
            uri={uri}
            onChangeDuration={onChangeDurations}
            index={index}
          />
        </View>
      )}
    </View>
  )
}

export default CardMusicForm

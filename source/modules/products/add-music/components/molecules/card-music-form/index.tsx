import React from 'react'
import { View, Platform, TouchableHighlight } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import InputTopic from '@/components/atom/input-topic'
import AudioPlayer from '@/components/organism/audio-player'

import {
  removeFormMusic,
  useFormMusic,
  useFormMusicComposers,
  useFormMusicDurations,
} from '@/forms/Product/product-music/hooks'

type Props = {
  index: number
  uri: string
}

const CardMusicForm = ({ index, uri }: Props) => {
  const web = Platform.OS === 'web'

  const { onChangeTitleMusics, titleMusics } = useFormMusic()
  const { onChangeDurations } = useFormMusicDurations()
  const { onRemoveMusic } = removeFormMusic()
  const { onChangeComposers, composers } = useFormMusicComposers()

  return (
    <View
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
          value={titleMusics[index]}
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

import React from 'react'
import { View, Platform, TouchableHighlight } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import InputTopic from '@/components/molecule/input-topic'
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
  composer: string
  duration: string
  title: string
}

const CardMusicForm = ({ index, uri, composer, duration, title }: Props) => {
  const web = Platform.OS === 'web'

  const { onChangeTitleMusics } = useFormMusic()
  const { onChangeDurations } = useFormMusicDurations()
  const { onRemoveMusic } = removeFormMusic()
  const { onChangeComposers } = useFormMusicComposers()

  return (
    <View
      style={{
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 2,
        },

        shadowRadius: 3.84,

        backgroundColor: 'rgba(0,0,0, 0.2)',
        borderRadius: 2,
        margin: 8,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <InputTopic
          topic={`Faixa ${index + 1 > 9 ? '' : 0}${index + 1}`}
          key={index}
          onChangeText={(text) => onChangeTitleMusics(text, index)}
          value={title}
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
        value={composer}
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

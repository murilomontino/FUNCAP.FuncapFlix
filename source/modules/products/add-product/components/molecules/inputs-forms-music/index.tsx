import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

import { Audio } from 'expo-av'

import { Category, TypeMusicAlbuns } from '@/types'

import Dropdown from '@/components/atom/dropdown'

import {
  useFormMusic,
  useFormMusicContent,
  useFormMusicsFile,
} from '@/forms/Product/product-music/hooks'

import GetFileButton from '../../atoms/get-file-button'
import InputTopic from '../../atoms/input-topic'

const InputsFormsMusic = () => {
  const { titleMusics, onChangeTitleMusics, titleAlbum, onChangeTitleAlbum } =
    useFormMusic()
  const { content, onChangeContent } = useFormMusicContent()
  const { file } = useFormMusicsFile()

  const ContentMusicItems = [
    { value: TypeMusicAlbuns.album, label: 'Álbum' },
    { value: TypeMusicAlbuns.single, label: 'Single' },
    { value: TypeMusicAlbuns.ep, label: 'EP' },
    { value: TypeMusicAlbuns.album_interprete, label: 'Álbum Interprete' },
  ]

  const [track, setTrack] = React.useState<Audio.Sound>()

  async function playSound(index: number) {
    const track = await Audio.Sound.createAsync({
      uri: file[index].uri,
    })

    setTrack(track.sound)
    track.sound.getStatusAsync().then((status) => {
      if (status.isLoaded) {
        console.log(status.durationMillis)
      }
    })

    //await track.playAsync()
  }

  React.useEffect(() => {
    return track
      ? () => {
          track.unloadAsync()
        }
      : undefined
  }, [track])

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
        <View key={item}>
          <InputTopic
            topic={`Faixa ${index + 1 > 9 ? '' : 0}${index + 1}`}
            key={index}
            onChangeText={(text) => onChangeTitleMusics(text, index)}
            value={item}
            styleViewContainer={{
              maxWidth: '90%',
            }}
          />
          <Button title="Play Sound" onPress={() => playSound(index)} />
        </View>
      ))}
    </View>
  )
}

export default InputsFormsMusic

const styles = StyleSheet.create({})

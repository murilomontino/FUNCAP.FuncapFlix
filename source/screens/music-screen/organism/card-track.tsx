import React, { useCallback, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Audio } from 'expo-av'

import { GettersTracks } from '@/types/products'
import { MotiPressable } from 'moti/interactions'

import { path } from '@/services/config/api'

import Controls from '../molecules/controls'

import colors from '@/global/colors'

interface Props {
  track: GettersTracks
  albumNomeUnico: string
}

const CardTrack = ({ track, albumNomeUnico }: Props) => {
  const { titulo, duracao } = track

  const [pressed, setPressed] = useState(false)
  const [sound, setSound] = useState<Audio.Sound>()
  const [load, setLoad] = useState(false)

  const onLoad = async () => {
    const mp3 = `${path}/musicas/${albumNomeUnico}/${track.arquivo}`

    const { sound } = await Audio.Sound.createAsync({
      uri: mp3,
    })

    setLoad(true)
    setSound(sound)
    await sound.playAsync()
  }

  const onStart = useCallback(async () => {
    if (sound) {
      await sound.playAsync()
    }
  }, [sound])

  const onStop = useCallback(async () => {
    if (sound) {
      await sound.stopAsync()
    }
  }, [sound])

  return (
    <MotiPressable
      onPress={() => {
        const newPressed = !pressed
        ;(async () => {
          if (newPressed) {
            if (!load) {
              await onLoad()
            }

            await onStart()
          } else {
            await onStop()
          }
        })()
        setPressed(newPressed)
      }}
      animate={({ hovered }) => {
        const hoverColor = hovered
          ? 'rgba(255,255,255,1)'
          : 'rgba(255,255,255,0.8)'

        return {
          backgroundColor: pressed ? colors.orange : hoverColor,
        }
      }}
      style={{
        flex: 1,
        flexDirection: 'row',
        height: 28,
        maxWidth: 480,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        elevation: 10,
        padding: 2,
        shadowColor: '#000',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        margin: 4,
      }}
    >
      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          margin: 10,
          color: '#000',
        }}
      >
        {titulo.slice(0, 30)}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            margin: 10,
            color: '#000',
          }}
        >
          {duracao}
        </Text>
        <Controls playing={pressed} />
      </View>
    </MotiPressable>
  )
}

export default CardTrack

const styles = StyleSheet.create({})

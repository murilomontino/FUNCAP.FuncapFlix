import React, { useCallback, useEffect, useState } from 'react'
import { Button, View } from 'react-native'

import { Audio, AVPlaybackStatus } from 'expo-av'

type Props = {
  uri: string
}

const PlayerMusic = ({ uri }: Props) => {
  const [track, setTrack] = useState<Audio.Sound>()
  const [status, setStatus] = useState<AVPlaybackStatus>()

  const playSound = useCallback(async () => {
    await track.playAsync()
  }, [track])

  const onPlaybackStatusUpdate = useCallback(
    async (status: AVPlaybackStatus) => {
      setStatus(status)
    },
    []
  )

  const stopSound = useCallback(async () => {
    await track.stopAsync()
  }, [track])

  const pauseSound = useCallback(async () => {
    await track.pauseAsync()
  }, [track])

  const loadSound = useCallback(async () => {
    const { sound, status } = await Audio.Sound.createAsync({
      uri: uri,
    })

    onPlaybackStatusUpdate(status)
    setTrack(sound)
  }, [uri])

  useEffect(() => {
    ;(async () => {
      loadSound()
    })()

    return () => {
      track.unloadAsync()
    }
  }, [])

  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Stop Sound" onPress={stopSound} />
      <Button title="Pause Sound" onPress={pauseSound} />
    </View>
  )
}

export default PlayerMusic

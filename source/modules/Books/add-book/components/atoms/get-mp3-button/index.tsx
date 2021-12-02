import React from 'react'
import { Button } from 'react-native-paper'

import { useFormMusic } from 'forms/Product'

import { styles } from '../styles'

const GetMP3Button = () => {
  const { getMusic, music } = useFormMusic()

  return (
    <Button style={[styles.buttonContainer]} color="#fff" onPress={getMusic}>
      {music.name || 'Escolher Música'}
    </Button>
  )
}

export default GetMP3Button

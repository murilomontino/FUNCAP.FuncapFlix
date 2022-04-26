import React from 'react'
import { View } from 'react-native'

import { Entypo } from '@expo/vector-icons'

interface Props {
  playing: boolean
}

const Controls = ({ playing }: Props) => {
  return (
    <View>
      <Entypo
        style={{
          marginRight: 2,
          borderRadius: 40,
        }}
        name={playing ? 'controller-stop' : 'controller-play'}
        size={24}
        color={'#000'}
      />
    </View>
  )
}

export default Controls

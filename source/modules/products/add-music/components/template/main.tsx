import React from 'react'
import { View } from 'react-native'

import Details from '../organism/details'
import Left from '../organism/left'
import Right from '../organism/right'

import { useSize } from '@/hooks/use-size'

const Main = () => {
  const { size } = useSize()

  return (
    <View
      style={[
        {
          flex: 5,
          marginTop: 40,
          padding: 40,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
        },
        size.width < 1127 && {
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      ]}
    >
      <Left />
      <Details />
      <Right />
    </View>
  )
}

export default Main

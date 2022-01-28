import React from 'react'
import { StyleSheet } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import { AntDesign } from '@expo/vector-icons'

import colors from '@/global/colors'

const TapPlayIcon = () => {
  const size = useScaledSize(1)

  return (
    <AntDesign
      name="play"
      size={size}
      color={colors.white}
      style={{
        zIndex: 10,
        borderRadius: 45,
        elevation: 10,
        backgroundColor: 'transparent',
      }}
    />
  )
}

export default TapPlayIcon

const styles = StyleSheet.create({})

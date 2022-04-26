import React, { memo } from 'react'
import { Image, Linking, TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import AppLoading from 'expo-app-loading'
import { useAssets } from 'expo-asset'

const LogoMapaCultural: React.FC = () => {
  const [assets] = useAssets([require('@/assets/LogoMapaCultural.png')])

  const fontSize = useScaledSize(6)

  if (!assets) {
    return <AppLoading />
  }

  const handleClickURL = async () => {
    await Linking.openURL('https://funcap.mapacultural.se.gov.br/')
  }

  return (
    <TouchableOpacity
      onPress={handleClickURL}
      style={{
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={assets[0]}
        style={{
          resizeMode: 'contain',
          width: fontSize,
          height: fontSize,
          marginLeft: 20,
        }}
      />
    </TouchableOpacity>
  )
}

export default memo(LogoMapaCultural)

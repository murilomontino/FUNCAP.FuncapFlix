import React, { memo } from 'react'
import { Image, Linking, TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import AppLoading from 'expo-app-loading'
import { useAssets } from 'expo-asset'

type Props = {
  size: number
}

const LogoFuncap: React.FC<Props> = ({ size }) => {
  const [assets] = useAssets([require('@/assets/LogoFuncap-Vertical.png')])

  const fontSize = useScaledSize(size)
  const link = 'https://www.funcap.se.gov.br/'

  const handleClickURL = async () => {
    if (link) {
      await Linking.openURL(link)
    }
  }

  if (!assets) {
    return <AppLoading />
  }

  return (
    <TouchableOpacity onPress={handleClickURL}>
      <Image
        source={assets[0]}
        style={{
          resizeMode: 'contain',
          width: fontSize,
          height: fontSize,
        }}
      />
    </TouchableOpacity>
  )
}

export default memo(LogoFuncap)

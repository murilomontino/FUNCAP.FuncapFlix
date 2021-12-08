import React, { memo } from 'react'
import { Image, TouchableOpacity } from 'react-native'
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

  if (!assets) {
    return <AppLoading />
  }

  return (
    <a href={link} style={{ textDecoration: 'none' }}>
      <TouchableOpacity>
        <Image
          source={assets[0]}
          style={{
            resizeMode: 'contain',
            width: fontSize,
            height: fontSize,
          }}
        />
      </TouchableOpacity>
    </a>
  )
}

export default memo(LogoFuncap)

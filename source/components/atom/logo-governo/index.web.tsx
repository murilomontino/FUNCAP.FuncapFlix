import React, { memo } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import AppLoading from 'expo-app-loading'
import { useAssets } from 'expo-asset'

type Props = {
  size: number
  textVisible?: boolean
}

const LogoGoverno: React.FC<Props> = ({ size, textVisible = true }) => {
  const [assets] = useAssets([
    require('@/assets/governo-logo.png'),
    require('@/assets/governo-logo-imagem.png'),
  ])

  const fontSize = useScaledSize(size)
  const link = 'https://www.se.gov.br/'

  if (!assets) {
    return <AppLoading />
  }

  return (
    <a href={link} style={{ textDecoration: 'none' }}>
      <TouchableOpacity>
        <Image
          source={textVisible ? assets[0] : assets[1]}
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

export default memo(LogoGoverno)

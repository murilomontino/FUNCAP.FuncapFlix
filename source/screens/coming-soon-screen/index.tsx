import React from 'react'
import { View } from 'react-native'

import ButtonLogin from '@/components/atom/button-login'
import HeaderLogo from '@/components/atom/header-logo'

import { ContainerBackground } from './styles'

const ComingSoonScreen = (params: any) => {
  const WIDTH_NUMBER = 7
  const TEXT_NUMBER = 2

  return (
    <ContainerBackground>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <HeaderLogo
          widthLogo={WIDTH_NUMBER}
          textSize={TEXT_NUMBER}
          subTitle="EM BREVE"
        />
      </View>
      <View style={{ position: 'absolute', right: 0, top: 0 }}>
        <ButtonLogin />
      </View>
    </ContainerBackground>
  )
}

export default ComingSoonScreen

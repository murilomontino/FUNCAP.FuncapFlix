import React from 'react'
import { Text, View } from 'react-native'
import { useDimensions, useScaledSize } from 'react-native-web-hooks'

import LogoFuncap from '@/components/atom/logo-funcap'

const HeaderLogo = () => {
  const { window } = useDimensions()

  return (
    <View
      style={{
        marginHorizontal: 40,
        padding: 20,
        justifyContent: window.width < 1127 ? 'center' : 'flex-start',
        flexDirection: 'row',
      }}
    >
      <LogoFuncap size={5} />
      <Text
        style={{
          color: '#f1f1f1',
          fontSize: useScaledSize(1.5),
          fontWeight: 'bold',
          fontVariant: ['small-caps'],
          marginLeft: 20,
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}
      >
        Fundação de Cultura e Arte Aperipê
      </Text>
    </View>
  )
}

export default HeaderLogo

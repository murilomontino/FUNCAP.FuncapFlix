import React from 'react'
import { Text, View } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import LogoFuncap from '@/components/atom/logo-funcap'

import { useSize } from '@/hooks/use-size'

const HeaderLogo = () => {
  const { size } = useSize()

  const TEXT_SIZE = useScaledSize(2)

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: size.width < 1127 ? 'center' : 'flex-start',
        flexDirection: 'row',
      }}
    >
      <LogoFuncap size={4} />
      <Text
        style={{
          color: '#f1f1f1',
          fontSize: TEXT_SIZE,
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

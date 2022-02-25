import React, { useState } from 'react'
import { Linking, Text } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import { AntDesign } from '@expo/vector-icons'
import { MotiPressable } from 'moti/interactions'

import colors from '@/global/colors'

type Props = {
  textVisible?: boolean
}

const ButtonLogin: React.FC<Props> = ({ textVisible = true }) => {
  const [hover, setHover] = useState(false)

  const handleClickURL = async () => {
    await Linking.openURL('https://funcap.mapacultural.acesso.se.gov.br/')
  }

  const fontSize = useScaledSize(0.7)
  const iconSize = useScaledSize(1.2)

  return (
    <MotiPressable
      onPress={handleClickURL}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      style={{
        padding: 12,
        marginRight: 4,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <AntDesign
        style={{ padding: 8 }}
        name="login"
        size={iconSize}
        color={hover ? 'orange' : colors.white}
      />

      {!!textVisible && (
        <Text
          style={{
            color: hover ? 'orange' : colors.white,
            padding: 8,
            fontSize: fontSize,
            fontWeight: 'bold',
          }}
        >
          Entrar
        </Text>
      )}
    </MotiPressable>
  )
}

export default ButtonLogin

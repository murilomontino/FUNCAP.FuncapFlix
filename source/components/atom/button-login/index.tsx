import React, { useState } from 'react'
import { Linking, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { useScaledSize } from 'react-native-web-hooks'

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
      <Icon
        size={iconSize}
        color={hover ? 'orange' : colors.white}
        style={{ padding: 8 }}
        tvParallaxProperties
        name="login"
      />
      {textVisible && (
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

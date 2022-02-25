import React from 'react'
import { TextProps, TouchableHighlightProps } from 'react-native'

import theme from '@/theme'

import { Container, Text } from './styles'

type Props = {
  visible: boolean
  color?: string
  text: string
  textProps?: TextProps
} & TouchableHighlightProps

const HelperText = ({
  visible,
  color = theme.COLORS.ERROR,
  text,
  textProps,
  ...rest
}: Props) => {
  if (!visible) {
    return <></>
  }

  return (
    <Container>
      <Text
        {...textProps}
        style={[
          {
            color: color,
          },
        ]}
      >
        {text}
      </Text>
    </Container>
  )
}

export default HelperText

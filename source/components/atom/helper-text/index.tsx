import React from 'react'
import { TextProps, TextStyle, TouchableHighlightProps } from 'react-native'

import theme from '@/theme'

import { Container, Text } from './styles'

type Props = {
  visible: boolean
  color?: string
  text: string
  textStyle?: TextStyle
  textProps?: TextProps
} & TouchableHighlightProps

const HelperText = ({
  visible,
  color = theme.COLORS.ERROR,
  text,
  textProps,
  textStyle,
  ...rest
}: Props) => {
  if (!visible) {
    return <></>
  }

  return (
    <Container {...rest}>
      <Text
        {...textProps}
        style={[
          textStyle,
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

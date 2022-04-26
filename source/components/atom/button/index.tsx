import React from 'react'
import {
  TouchableOpacityProps,
  TextProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native'

import { Container, Text } from './styles'

import colors from '@/global/colors'

interface Props extends TouchableOpacityProps {
  textProps?: TextProps
  text: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  selectable?: boolean
  selected?: boolean
}

const Button = ({
  textProps,
  disabled,
  text,
  style,
  textStyle,
  selectable = false,
  selected = false,
  ...rest
}: Props) => {
  const color = disabled ? colors.grey20 : colors.button_secondary

  return (
    <Container
      {...rest}
      disabled={disabled}
      style={[
        style,
        {
          backgroundColor: color,
        },
        selectable && {
          backgroundColor: selected ? color : colors.grey20,
        },
      ]}
    >
      <Text {...textProps} style={[textStyle]}>
        {text}
      </Text>
    </Container>
  )
}

export default Button

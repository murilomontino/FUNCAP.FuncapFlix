import React from 'react'
import {
  Text,
  TouchableOpacityProps,
  TextProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native'

import colors from '@/global/colors'

interface Props extends TouchableOpacityProps {
  textProps?: TextProps
  text: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const Button = ({
  textProps,
  disabled,
  text,
  style,
  textStyle,
  ...rest
}: Props) => {
  const color = disabled ? colors.grey20 : colors.button_secondary

  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      style={[
        {
          backgroundColor: color,
          padding: 16,
          margin: 8,
          borderRadius: 40,
          width: 200,
        },
        style,
      ]}
    >
      <Text
        {...textProps}
        style={[
          {
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 14,
            textAlign: 'center',
          },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

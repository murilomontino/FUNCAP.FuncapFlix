import React from 'react'
import {
  Text,
  TouchableHighlight,
  TouchableOpacityProps,
  TextProps,
} from 'react-native'

import colors from '@/global/colors'

interface Props extends TouchableOpacityProps {
  textProps?: TextProps
  text: string
}

const Button = ({ textProps, disabled, text, ...rest }: Props) => {
  return (
    <TouchableHighlight
      {...rest}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? colors.grey20 : colors.button_secondary,
        padding: 16,
        margin: 8,
        borderRadius: 40,

        width: 200,
      }}
    >
      <Text
        {...textProps}
        style={{
          fontWeight: 'bold',
          color: '#fff',
          fontSize: 14,
          textAlign: 'center',
        }}
      >
        {text}
      </Text>
    </TouchableHighlight>
  )
}

export default Button

import React, { useEffect, useState } from 'react'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { MaskedTextInputProps } from 'react-native-mask-text'

import Topic from '@/components/atom/topic'

import { Container, MaskedInput } from './styles'

type Props = {
  topic: string
  value: string
  requered?: boolean
  maxWidthTitle?: number | string
  width?: number | string
  maxLength?: number
  styleViewContainer?: ViewStyle
  styleViewInput?: TextStyle | ViewStyle | ImageStyle
  styleTopic?: TextStyle
  mask: string
  textAlign?: 'left' | 'center' | 'right'
  type?: string
  onChangeText: (text: string, rawText: string) => void
} & MaskedTextInputProps

const InputTopicMasked = ({
  mask,
  styleViewContainer,
  topic,
  value,
  requered = false,
  maxLength,
  styleViewInput,
  styleTopic,
  onChangeText,
  placeholder,
  textAlign = 'left',
  width = '100%',
  maxWidthTitle = 150,
  ...rest
}: Props) => {
  const [defaultValue] = useState(value)

  useEffect(() => {
    if (defaultValue) {
      onChangeText(defaultValue, defaultValue)
    }
  }, [])

  return (
    <Container
      style={[
        {
          width: width,
        },
        styleViewContainer,
      ]}
    >
      {!!topic && (
        <Topic
          topic={topic}
          requered={requered}
          style={styleTopic}
          maxWidthTitle={maxWidthTitle}
        />
      )}
      <MaskedInput
        {...rest}
        mask={mask}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder || topic}
        maxLength={maxLength}
        style={[
          styleViewInput,
          {
            textAlign,
          },
        ]}
      />
    </Container>
  )
}

export default InputTopicMasked

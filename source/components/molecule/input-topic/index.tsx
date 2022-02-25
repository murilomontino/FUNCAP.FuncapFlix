import React, { MutableRefObject, useCallback, useState } from 'react'
import { ViewStyle, TextInputProps, ImageStyle, TextStyle } from 'react-native'

import Topic from '@/components/atom/topic'

import { Container, Input } from './styles'

type Props = {
  topic: string
  value: string | MutableRefObject<string>
  requered?: boolean
  maxWidthTitle?: number | string
  width?: number | string
  maxLength?: number
  stylesViewTitle?: ViewStyle | ViewStyle[]
  styleViewContainer?: ViewStyle
  styleViewInput?: TextStyle | ViewStyle | ImageStyle
  styleTopic?: TextStyle
  onChangeText: (text: string) => void
} & Omit<TextInputProps, 'value'>

export const InputTopic = ({
  styleViewContainer,
  topic,
  value,
  requered = false,
  maxLength,
  styleViewInput,
  styleTopic,
  onChangeText,
  placeholder,
  width = '100%',
  maxWidthTitle = 150,
  ...rest
}: Props) => {
  const [valueText, setValueText] = useState<string>(() => {
    if (typeof value === 'string') {
      return value
    }

    return value?.current
  })

  const onChangeValueText = useCallback((text: string) => {
    setValueText(text)
    onChangeText(text)
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
      <Input
        {...rest}
        placeholder={placeholder || topic}
        value={valueText}
        onChangeText={onChangeValueText}
        style={[styleViewInput]}
        maxLength={maxLength}
      />
    </Container>
  )
}

export default InputTopic

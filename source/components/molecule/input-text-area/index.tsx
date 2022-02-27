import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useState,
} from 'react'

import Topic from '@/components/atom/topic'

import { Container, TextLength, Input } from './styles'

type Props = {
  topic: string
  numberLines: number
  maxLength: number
  height: number
  placeholder?: string
  value: string | MutableRefObject<string>
  requered?: boolean
  onChangeValue: (text: string) => void
  widthContainer?: number | string
}

const InputTextArea = ({
  topic,
  numberLines,
  maxLength = 5000,
  height,
  placeholder,
  value,
  requered = false,
  widthContainer = '100%',
  onChangeValue,
}: Props) => {
  const [valueText, setValueText] = useState(() => {
    if (typeof value === 'string') {
      return value
    }

    return value?.current
  })

  useEffect(() => {
    if (typeof value === 'string') {
      setValueText(value)
    } else {
      setValueText(value?.current)
    }
  }, [value])

  const onChangeValueText = useCallback((text: string) => {
    setValueText(text)
    onChangeValue(text)
  }, [])

  return (
    <Container
      style={[
        {
          width: widthContainer,
        },
      ]}
    >
      {!!topic && <Topic topic={topic} requered={requered} />}
      <Input
        value={valueText}
        placeholder={placeholder || topic}
        onChangeText={onChangeValueText}
        style={[
          {
            flexWrap: 'wrap',
            height: height,
            textAlign: 'justify',
          },
        ]}
        multiline={true}
        numberOfLines={numberLines}
        maxLength={maxLength}
      />
      <TextLength>
        {valueText.length}/{maxLength}
      </TextLength>
    </Container>
  )
}

export default InputTextArea

import React, { useMemo } from 'react'
import {
  View,
  TextInput,
  Platform,
  Text,
  ViewStyle,
  TextInputProps,
} from 'react-native'
import { MaskedTextInput } from 'react-native-mask-text'

import { styles } from '../styles'

interface Props extends TextInputProps {
  topic: string
  value: string
  maxLength?: number
  onChangeValue: (text: string) => void
  viewInput?: ViewStyle
  mask?: string
}

const InputTopic = ({
  topic,
  onChangeValue,
  value,
  viewInput,
  maxLength = 255,
  mask = '',
  ...rest
}: Props) => {
  const web = Platform.OS === 'web'

  const outlineWeb = useMemo(() => {
    return web ? styles.outlineWeb : styles.outline
  }, [])

  if (mask) {
    return (
      <View style={[styles.textAreaContainer, viewInput]}>
        <View style={styles.viewTitle}>
          <Text style={styles.topicForm}>{topic}:</Text>
        </View>
        <MaskedTextInput
          {...rest}
          value={value}
          onChangeText={onChangeValue}
          placeholder={rest.placeholder || topic}
          style={[styles.textArea, outlineWeb, viewInput]}
          maxLength={maxLength}
          mask={mask}
        />
      </View>
    )
  }

  return (
    <View style={[styles.textAreaContainer, viewInput]}>
      <View style={styles.viewTitle}>
        <Text style={styles.topicForm}>{topic}:</Text>
      </View>
      <TextInput
        {...rest}
        placeholder={rest.placeholder || topic}
        value={value}
        onChangeText={onChangeValue}
        style={[styles.textArea, outlineWeb, viewInput]}
        maxLength={maxLength}
      />
    </View>
  )
}

export default InputTopic

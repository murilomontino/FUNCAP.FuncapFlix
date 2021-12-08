import React, { useMemo } from 'react'
import { View, TextInput, Platform, Text, ViewStyle } from 'react-native'

import { styles } from '../styles'

type Props = {
  topic: string
  value: string
  maxLength?: number
  onChangeValue: (text: string) => void
  viewInput?: ViewStyle
}

const InputTopic = ({
  topic,
  onChangeValue,
  value,
  viewInput,
  maxLength = 255,
}: Props) => {
  const web = Platform.OS === 'web'

  const outlineWeb = useMemo(() => {
    return web ? styles.outlineWeb : styles.outline
  }, [])

  return (
    <View style={[styles.textAreaContainer, viewInput]}>
      <View style={styles.viewTitle}>
        <Text style={styles.topicForm}>{topic}:</Text>
      </View>
      <TextInput
        placeholder={topic}
        value={value}
        onChangeText={onChangeValue}
        style={[styles.textArea, outlineWeb, viewInput]}
        maxLength={maxLength}
      />
    </View>
  )
}

export default InputTopic

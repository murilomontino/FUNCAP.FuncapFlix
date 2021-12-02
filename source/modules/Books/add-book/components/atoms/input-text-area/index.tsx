import React, { useMemo } from 'react'
import { View, TextInput, Platform, Text } from 'react-native'

import { styles } from '../styles'

type Props = {
  topic: string
  numberLines: number
  maxLength: number
  height: number
  value: string
  onChangeValue: (text: string) => void
}

const InputTextArea = ({
  topic,
  numberLines,
  maxLength,
  height,
  value,
  onChangeValue,
}: Props) => {
  const web = Platform.OS === 'web'

  const outlineWeb = useMemo(() => {
    return web ? styles.outlineWeb : styles.outline
  }, [])

  return (
    <View style={styles.textAreaContainer}>
      <View style={styles.viewTitle}>
        <Text style={styles.topicForm}>{topic}: </Text>
      </View>
      <TextInput
        value={value}
        placeholder={topic}
        onChangeText={onChangeValue}
        style={[
          {
            flexWrap: 'wrap',
            height: height,
            textAlign: 'justify',
          },
          styles.textArea,
          outlineWeb,
        ]}
        multiline={true}
        numberOfLines={numberLines}
        maxLength={maxLength}
      />
      <Text
        style={{
          padding: 12,
          fontSize: 12,
          color: '#828282',
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      >
        {value.length}/{maxLength}
      </Text>
    </View>
  )
}

export default InputTextArea

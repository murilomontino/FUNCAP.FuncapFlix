import React from 'react'
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
  return (
    <View style={styles.textAreaContainer}>
      <View style={styles.viewTitle}>
        <Text style={styles.topicForm}>{topic}: </Text>
      </View>
      <TextInput
        value={value}
        onChangeText={onChangeValue}
        style={[
          {
            flexWrap: 'wrap',
            height: height,
            textAlign: 'justify',
          },
          styles.textArea,
          web && {
            outlineColor: 'orange',
            //outlineOffset: ? NumberOrString,
            //outlineStyle: ? string,
            outlineWidth: 0,
          },
        ]}
        multiline={true}
        numberOfLines={numberLines}
        maxLength={maxLength}
      />
    </View>
  )
}

export default InputTextArea

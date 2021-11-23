import React from 'react'
import { View, TextInput, Platform, Text } from 'react-native'

import { styles } from '../styles'

type Props = {
  topic: string
  value: string
  onChangeValue: (text: string) => void
}

const InputSubTitle = ({ topic, onChangeValue, value }: Props) => {
  const web = Platform.OS === 'web'
  return (
    <View style={styles.textAreaContainer}>
      <View style={styles.viewTitle}>
        <Text style={styles.topicForm}>{topic}:</Text>
      </View>
      <TextInput
        value={value}
        onChangeText={onChangeValue}
        style={[
          styles.textArea,
          web && {
            outlineColor: 'orange',
            //outlineOffset: ? NumberOrString,
            //outlineStyle: ? string,
            outlineWidth: 0,
          },
        ]}
        maxLength={255}
      />
    </View>
  )
}

export default InputSubTitle

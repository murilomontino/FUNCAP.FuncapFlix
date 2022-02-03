import React, { useMemo } from 'react'
import { View, TextInput, Platform, Text, StyleSheet } from 'react-native'

import colors from '@/global/colors'

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
  maxLength = 5000,
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

export const styles = StyleSheet.create({
  textAreaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    margin: 8,
    alignContent: 'center',
  },
  topicForm: {
    fontWeight: 'bold',
    color: '#f1f1f1',
    padding: 8,
    textAlign: 'right',
  },
  viewTitle: {
    flex: 1,
    maxWidth: 150,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textArea: {
    color: colors.grey20,
    fontWeight: '500',
    backgroundColor: '#d9d9d9',
    padding: 8,
    borderRadius: 8,
    borderWidth: 0.2,
    borderColor: colors.grey20,
    flex: 3,
  },
  outlineWeb: {
    outlineColor: 'orange',
    //outlineOffset: ? NumberOrString,
    //outlineStyle: ? string,
    outlineRightWidth: 0,
    outlineWidth: 1,
  },
  outline: {},
  buttonContainer: {
    backgroundColor: colors.button_secondary,
    borderRadius: 4,
    width: 250,
    height: 50,
    margin: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: colors.grey20,
  },
})

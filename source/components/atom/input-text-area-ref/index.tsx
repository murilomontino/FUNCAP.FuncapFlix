import React, { MutableRefObject, useCallback, useMemo, useState } from 'react'
import { View, TextInput, Platform, Text, StyleSheet } from 'react-native'

import colors from '@/global/colors'

type Props = {
  topic: string
  numberLines: number
  maxLength: number
  height: number
  placeholder?: string
  value: MutableRefObject<string>
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
  const web = Platform.OS === 'web'

  const [valueText, setValueText] = useState(value.current)

  const onChangeValueText = useCallback((text: string) => {
    setValueText(text)
    onChangeValue(text)
  }, [])

  const outlineWeb = useMemo(() => {
    return web ? styles.outlineWeb : styles.outline
  }, [])

  return (
    <View
      style={[
        styles.textAreaContainer,
        {
          width: widthContainer,
        },
      ]}
    >
      {!!topic && (
        <View style={styles.viewTitle}>
          <Text style={styles.topicForm}>{topic}</Text>
          {requered && <Text style={styles.topicRequered}>*</Text>}
        </View>
      )}
      <TextInput
        value={valueText}
        placeholder={placeholder || topic}
        onChangeText={onChangeValueText}
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
        {valueText.length}/{maxLength}
      </Text>
    </View>
  )
}

export default InputTextArea

export const styles = StyleSheet.create({
  textAreaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 8,
    alignContent: 'center',
  },
  topicForm: {
    fontWeight: 'bold',
    color: '#f1f1f1',
    paddingVertical: 4,
    textAlign: 'right',
  },
  topicRequered: {
    fontWeight: 'bold',
    color: colors.redSecondary,
    fontSize: 18,
    textAlign: 'right',
    paddingLeft: 2,
  },
  viewTitle: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 8,
    maxWidth: 150,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  textArea: {
    color: colors.grey20,
    fontWeight: '500',
    backgroundColor: '#d9d9d9',
    padding: 8,
    borderRadius: 2,
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

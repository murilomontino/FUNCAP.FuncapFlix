import React, { useMemo } from 'react'
import {
  View,
  TextInput,
  Platform,
  Text,
  ViewStyle,
  TextInputProps,
  ImageStyle,
  TextStyle,
  StyleSheet,
} from 'react-native'
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text'

import colors from '@/global/colors'

interface Props {
  topic: string
  value: string
  maxLength?: number
  styleViewContainer?: ViewStyle
  styleViewInput?: TextStyle | ViewStyle | ImageStyle
  mask?: string
  type?: string
  onChangeText:
    | ((text: string, rawText: string) => void)
    | ((text: string) => void)
}

interface InputTopicProps extends TextInputProps, Props {
  mask?: undefined
  value: string
  type?: undefined
  onChangeText: (text: string) => void
}

interface MaskedTopicProps extends MaskedTextInputProps, Props {
  mask: string
  value: string
  onChangeText: (text: string, rawText: string) => void
  type?: 'custom' | 'currency'
}

type InputTopicType = InputTopicProps | MaskedTopicProps

export const InputTopic = (params: InputTopicType) => {
  const web = Platform.OS === 'web'

  const outlineWeb = useMemo(() => {
    return web ? styles.outlineWeb : styles.outline
  }, [])

  if (params.mask !== undefined) {
    return (
      <View style={[styles.textAreaContainer, params.styleViewContainer]}>
        <View style={styles.viewTitle}>
          <Text style={styles.topicForm}>{params.topic}:</Text>
        </View>
        <MaskedTextInput
          {...params}
          mask={params.mask}
          value={params.value}
          onChangeText={params.onChangeText}
          placeholder={params.placeholder || params.topic}
          style={[styles.textArea, outlineWeb, params.styleViewInput]}
          maxLength={params.maxLength}
        />
      </View>
    )
  }

  return (
    <View style={[styles.textAreaContainer, params.styleViewContainer]}>
      {params.topic && (
        <View style={styles.viewTitle}>
          <Text style={styles.topicForm}>{params.topic}:</Text>
        </View>
      )}
      <TextInput
        {...params}
        placeholder={params.placeholder || params.topic}
        value={params.value}
        onChangeText={(text) => params.onChangeText(text, text)}
        style={[styles.textArea, outlineWeb, params.styleViewInput]}
        maxLength={params.maxLength}
      />
    </View>
  )
}

export default InputTopic

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

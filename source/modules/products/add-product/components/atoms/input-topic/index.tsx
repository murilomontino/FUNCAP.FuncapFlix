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
} from 'react-native'
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text'

import { styles } from '../styles'

interface Props {
  topic: string
  value: string
  maxLength?: number
  viewContainer?: ViewStyle
  viewInput?: TextStyle | ViewStyle | ImageStyle
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

const InputTopic = (params: InputTopicType) => {
  const web = Platform.OS === 'web'

  const outlineWeb = useMemo(() => {
    return web ? styles.outlineWeb : styles.outline
  }, [])

  if (params.mask !== undefined || params.type !== undefined) {
    return (
      <View style={[styles.textAreaContainer, params.viewContainer]}>
        <View style={styles.viewTitle}>
          <Text style={styles.topicForm}>{params.topic}:</Text>
        </View>
        <MaskedTextInput
          {...params}
          mask={params.mask}
          value={params.value}
          onChangeText={params.onChangeText}
          placeholder={params.placeholder || params.topic}
          style={[styles.textArea, outlineWeb, params.viewInput]}
          maxLength={params.maxLength}
        />
      </View>
    )
  }

  return (
    <View style={[styles.textAreaContainer, params.viewContainer]}>
      {params.topic && (
        <View style={styles.viewTitle}>
          <Text style={styles.topicForm}>{params.topic}:</Text>
        </View>
      )}
      <TextInput
        {...params}
        placeholder={params.placeholder || params.topic}
        value={params.value}
        onChangeText={params.onChangeText}
        style={[styles.textArea, outlineWeb, params.viewInput]}
        maxLength={params.maxLength}
      />
    </View>
  )
}

export default InputTopic

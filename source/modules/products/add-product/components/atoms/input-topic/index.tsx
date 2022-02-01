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

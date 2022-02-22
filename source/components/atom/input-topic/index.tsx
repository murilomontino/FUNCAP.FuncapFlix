import React, { useEffect, useMemo, useState } from 'react'
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
  requered?: boolean
  maxWidthTitle?: number | string
  width?: number | string
  maxLength?: number
  stylesViewTitle?: ViewStyle | ViewStyle[]
  styleViewContainer?: ViewStyle
  styleViewInput?: TextStyle | ViewStyle | ImageStyle
  styleTopic?: TextStyle
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

export const InputTopic = ({
  mask,
  styleViewContainer,
  topic,
  value,
  requered = false,
  maxLength,
  stylesViewTitle,
  styleViewInput,
  styleTopic,
  onChangeText,
  placeholder,
  width = '100%',
  maxWidthTitle = 150,
  ...rest
}: InputTopicType) => {
  const web = Platform.OS === 'web'
  const outlineWeb = useMemo(() => {
    return web ? styles.outlineWeb : styles.outline
  }, [])

  const [defaultValue] = useState(value)

  if (mask !== undefined) {
    useEffect(() => {
      if (defaultValue) {
        onChangeText(defaultValue)
      }
    }, [])

    return (
      <View
        style={[
          {
            width: width,
          },
          styles.textAreaContainer,
          styleViewContainer,
        ]}
      >
        {!!topic && (
          <View
            style={[
              styles.viewTitle,
              stylesViewTitle,
              {
                maxWidth: maxWidthTitle,
              },
            ]}
          >
            <Text style={[styles.topicForm, styleTopic]}>{topic}</Text>
            {requered && <Text style={styles.topicRequered}>*</Text>}
          </View>
        )}
        <MaskedTextInput
          {...rest}
          mask={mask}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder || topic}
          style={[styles.textArea, outlineWeb, styleViewInput]}
          maxLength={maxLength}
        />
      </View>
    )
  }

  return (
    <View
      style={[
        {
          width: width,
        },
        styles.textAreaContainer,
        styleViewContainer,
      ]}
    >
      {!!topic && (
        <View
          style={[
            styles.viewTitle,
            stylesViewTitle,
            {
              maxWidth: maxWidthTitle,
            },
          ]}
        >
          <Text style={[styles.topicForm, styleTopic]}>{topic}</Text>
          {requered && <Text style={styles.topicRequered}>*</Text>}
        </View>
      )}
      <TextInput
        {...rest}
        placeholder={placeholder || topic}
        value={value}
        onChangeText={(text) => onChangeText(text, text)}
        style={[styles.textArea, outlineWeb, styleViewInput]}
        maxLength={maxLength}
      />
    </View>
  )
}

export default InputTopic

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
    justifyContent: 'flex-end',
    alignItems: 'center',
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

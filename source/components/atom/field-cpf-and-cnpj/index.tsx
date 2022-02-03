import React, { useMemo, useState } from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'
import { MaskedTextInput } from 'react-native-mask-text'
import { HelperText } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

import { validateBr } from 'js-brasil'

import colors from '@/global/colors'
import useDebounce from '@/hooks/use-debounce'

type Props = {
  value: string
  onChangeValue: (value: string) => void
  isValid: boolean
  onChangeIsValid: (isValid: boolean) => void
  topic: string
  viewTitle: ViewStyle
  viewInput: ViewStyle
  viewContainer: ViewStyle
  topicForm: TextStyle
}

const FieldCPFandCNPJGeneric = ({
  viewTitle,
  topicForm,
  topic,
  viewContainer,
  viewInput,
  value,
  onChangeValue,
  isValid,
  onChangeIsValid,
  ...rest
}: Props) => {
  // EFEITOS VISUAIS

  const [borderFocus, setBorderFocus] = useState(false)

  const toogleBorderFocus = () => {
    setBorderFocus(!borderFocus)
  }

  // VERIFICAÇÃO DE CPF
  const debounce = useDebounce()

  const handleChangeCPFandCNPJ = (text: string) => {
    onChangeValue(text)

    debounce(() => {
      if (validateBr.cpf(text) || validateBr.cnpj(text)) {
        onChangeIsValid(true)
      } else {
        onChangeIsValid(false)
      }
    }, 50)
  }

  const border = useMemo(() => {
    const borderWidth = borderFocus ? 2 : 1

    if (value.length === 14 || value.length === 18) {
      if (isValid) {
        return {
          borderWidth,
          borderColor: 'green',
        }
      } else {
        return {
          borderWidth,
          borderColor: '#ff0000',
        }
      }
    }
    if (borderFocus) {
      return {
        borderWidth,
        borderColor: 'orange',
      }
    } else {
      return {
        borderWidth: 1,
        borderColor: colors.grey20,
      }
    }
  }, [isValid, borderFocus, value])

  return (
    <>
      <HelperText
        onPressIn={() => {
          return
        }}
        onPressOut={() => {
          return
        }}
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: -10,
          },
        ]}
        type="error"
        visible={
          (!isValid && value.length === 14) || (!isValid && value.length === 18)
        }
      >
        {value.length === 14 && 'CPF'}
        {value.length === 18 && 'CNPJ'} Inválido, confira e digite novamente!
      </HelperText>
      <View style={[viewContainer, { maxWidth: '90%' }]}>
        <View style={[viewTitle]}>
          <Text style={[topicForm]}>{topic}: </Text>
        </View>
        <MaskedTextInput
          placeholder={topic}
          onFocus={toogleBorderFocus}
          onBlur={toogleBorderFocus}
          style={[
            viewInput,
            {
              outlineStyle: 'none',
            },
            {
              width: '100%',
              ...border,
              borderRightWidth: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          ]}
          mask={value.length < 14 ? '999.999.999-99' : '99.999.999/9999-99'}
          value={value}
          onChangeText={handleChangeCPFandCNPJ}
          keyboardType={'numeric'}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#d9d9d9',
            borderLeftWidth: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderRadius: 8,

            ...border,
          }}
        >
          <Icon
            style={{ marginRight: 5 }}
            name="close"
            size={14}
            color={border.borderColor}
          />
        </View>
      </View>
    </>
  )
}

export default FieldCPFandCNPJGeneric

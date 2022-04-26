import React, { useEffect, useMemo, useState } from 'react'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { validateBr } from 'js-brasil'

import HelperText from '@/components/atom/helper-text'
import Topic from '@/components/atom/topic'

import { MaskedInput, ContainerIcon, Container } from './styles'

import colors from '@/global/colors'
import useDebounce from '@/hooks/use-debounce'

type Props = {
  value: string
  onChangeValue: (value: string) => void
  isValid: boolean
  onChangeIsValid: (isValid: boolean) => void
  topic: string
  viewTitle?: ViewStyle
  viewInput?: ViewStyle
  viewContainer?: ViewStyle | ViewStyle[]
  topicForm?: TextStyle
  requered?: boolean
  textAlign?: 'left' | 'center' | 'right'
}

const FieldCPFandCNPJGeneric = ({
  topic,
  viewContainer,
  viewInput,
  value,
  onChangeValue,
  requered = true,
  isValid,
  textAlign = 'left',
  onChangeIsValid,
  ...rest
}: Props) => {
  // EFEITOS VISUAIS

  const [borderFocus, setBorderFocus] = useState(false)
  const [defaultValue] = useState(value)

  useEffect(() => {
    if (defaultValue) {
      handleChangeCPFandCNPJ(defaultValue)
    }
    return () => {
      setBorderFocus(false)
    }
  }, [])

  const toggleBorderFocus = () => {
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

  const isValidMemo = useMemo(() => {
    return (
      (!isValid && value.length === 14) || (!isValid && value.length === 18)
    )
  }, [isValid, value])

  const msgError = useMemo(() => {
    if (value.length === 14 && 'CPF') {
      return 'CPF inválido, verifique se digitou corretamente'
    } else if (value.length === 18 && 'CNPJ') {
      return 'CNPJ inválido, verifique se digitou corretamente'
    } else {
      return ''
    }
  }, [value])

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
      <Container style={[viewContainer, { maxWidth: '90%' }]}>
        <Topic requered={requered} topic={topic} />
        <MaskedInput
          value={value}
          defaultValue={defaultValue}
          placeholder={topic}
          onFocus={toggleBorderFocus}
          onBlur={toggleBorderFocus}
          style={[
            viewInput,
            {
              ...border,
              borderRightWidth: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              textAlign,
            },
          ]}
          mask={value.length < 14 ? '999.999.999-99' : '99.999.999/9999-99'}
          onChangeText={handleChangeCPFandCNPJ}
          keyboardType={'numeric'}
        />
        <ContainerIcon
          style={[
            {
              ...border,
            },
          ]}
        >
          <Icon
            style={{ marginRight: 5 }}
            name="close"
            size={14}
            color={border.borderColor}
          />
        </ContainerIcon>
      </Container>

      <HelperText text={msgError} visible={isValidMemo} />
    </>
  )
}

export default FieldCPFandCNPJGeneric

export const stylesDefault = StyleSheet.create({
  topicRequered: {
    fontWeight: 'bold',
    color: colors.redSecondary,
    fontSize: 18,
    textAlign: 'right',
    paddingLeft: 2,
  },
})

import React from 'react'
import { Platform, Text, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import FieldCPFandCNPJGeneric from '@/components/molecule/field-cpf-and-cnpj'
import { InputTopic } from '@/components/molecule/input-topic'
import InputTopicMasked from '@/components/molecule/input-topic-masked'

import {
  useFormBookData,
  useFormBookCPFandCNPJ,
} from '@/forms/Product/product-book/hooks'

import InputsFormsLiterature from '../../molecules/inputs-forms-literature'

import colors from '@/global/colors'

const Details = () => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  const {
    culturalName,
    onChangeCulturalName,
    onChangePublishedDate,
    publishedDate,
  } = useFormBookData()

  const {
    cpfOrCnpj,
    cpfOrCnpjIsValid,
    onChangeCPForCNPJ,
    onChangeCPForCNPJIsValid,
  } = useFormBookCPFandCNPJ()

  return (
    <View
      style={{
        height: '100%',
        width: '70%',
        flex: 2.5,
        minHeight: size.height,
        marginBottom: 120,
        borderRightWidth: size.width < 1127 ? 0 : 1,
        borderRightColor: '#01010',
        borderLeftWidth: size.width < 1127 ? 0 : 1,
        borderLeftColor: '#01010',
        marginRight: 8,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 8,
          color: colors.redSecondary,
        }}
      >
        * Campos Obrigatórios
      </Text>
      <FieldCPFandCNPJGeneric
        isValid={cpfOrCnpjIsValid}
        onChangeIsValid={onChangeCPForCNPJIsValid}
        onChangeValue={onChangeCPForCNPJ}
        value={cpfOrCnpj}
        topic="CPF/CNPJ"
      />
      <InputTopic
        topic="Nome Cultural"
        requered={true}
        onChangeText={onChangeCulturalName}
        value={culturalName}
        styleViewContainer={{
          width: '90%',
        }}
      />
      <InputTopicMasked
        topic="Data de Publicação"
        onChangeText={onChangePublishedDate}
        value={publishedDate}
        styleViewContainer={{
          width: '90%',
        }}
        mask={'99/99/9999'}
      />

      <InputsFormsLiterature />
    </View>
  )
}

export default Details

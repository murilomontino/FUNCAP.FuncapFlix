import React from 'react'
import { Text, View } from 'react-native'

import FieldCPFandCNPJGeneric from '@/components/molecule/field-cpf-and-cnpj'
import { InputTopic } from '@/components/molecule/input-topic'
import InputTopicMasked from '@/components/molecule/input-topic-masked'

import {
  useFormBookData,
  useFormBookCPFandCNPJ,
} from '@/forms/Product/product-book/hooks'

import InputsFormsLiterature from '../../molecules/inputs-forms-literature'

import colors from '@/global/colors'
import { useSize } from '@/hooks/use-size'

const Details = () => {
  const { size, web, SCREEN_SMALLER_THAN_LARGE_SIZE } = useSize()

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
        width: '80%',
        flex: SCREEN_SMALLER_THAN_LARGE_SIZE ? 10 : 2.5,
        minHeight: SCREEN_SMALLER_THAN_LARGE_SIZE ? size.height * 2.5 : '100%',
        borderRightWidth: SCREEN_SMALLER_THAN_LARGE_SIZE ? 0 : 1,
        borderRightColor: '#01010',
        borderLeftWidth: SCREEN_SMALLER_THAN_LARGE_SIZE ? 0 : 1,
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

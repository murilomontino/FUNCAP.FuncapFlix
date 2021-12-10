import React from 'react'
import { Platform, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { Category } from '@/types/Products'

import FieldCPFandCNPJGeneric from '@/components/atom/field-cpf-and-cnpj'

import { useFormProductCategory } from '@/forms/Product/hooks'

import { styles } from '../../atoms/styles'
import InputsFormsLiterature from '../../molecules/inputs-forms-literature'

const Details = () => {
  const { category } = useFormProductCategory()
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  return (
    <View
      style={{
        width: '70%',
        flex: 2.5,
        minHeight: size.height,
        marginBottom: 120,
      }}
    >
      <FieldCPFandCNPJGeneric
        viewContainer={styles.textAreaContainer}
        viewInput={styles.textArea}
        topic="CPF/CNPJ"
        topicForm={styles.topicForm}
        viewTitle={styles.viewTitle}
      />

      {category === Category.Literature && <InputsFormsLiterature />}
    </View>
  )
}

export default Details

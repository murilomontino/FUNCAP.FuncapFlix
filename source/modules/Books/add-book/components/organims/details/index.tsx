import React from 'react'
import { View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { Category } from '@/types/Products'

import FieldCPFandCNPJGeneric from '@/components/atom/field-cpf-and-cnpj'

import { useFormProductCategory } from '@/forms/Product/hooks'

import { styles } from '../../atoms/styles'
import InputsFormsLiterature from '../../molecules/inputs-forms-literature'

const Details = () => {
  const { category } = useFormProductCategory()
  const { window } = useDimensions()

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: window.height,
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

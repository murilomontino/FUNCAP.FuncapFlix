import React from 'react'
import { View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { useFormProduct, useFormProductCategory } from 'forms/Product'
import { Category } from 'types/Products'

import FieldCPFandCNPJGeneric from 'components/atom/field-cpf-and-cnpj'

import InputTopic from '../../atoms/input-topic'
import InputsFormsLiterature from '../../molecules/inputs-forms-literature'

import { styles } from '../../atoms/styles'

const Details = () => {
  const { category } = useFormProductCategory()
  const { onChangeTitle, title } = useFormProduct()
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
      <InputTopic
        value={title}
        onChangeValue={onChangeTitle}
        topic="Título*"
        viewInput={{
          width: '90%',
        }}
      />

      {category === Category.Literature && <InputsFormsLiterature />}
    </View>
  )
}

export default Details

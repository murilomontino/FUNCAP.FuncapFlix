import React from 'react'
import { Text, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { useFormProduct } from 'forms/Product'

import InputTextArea from '../../atoms/input-text-area'
import InputTopic from '../../atoms/input-topic'

const InputsFormsLiterature = () => {
  const {
    onChangeResumo,
    onChangeSinopse,
    onChangeSubTitle,
    resumo,
    sinopse,
    subTitle,
  } = useFormProduct()

  const { window } = useDimensions()

  return (
    <View
      style={{
        maxWidth: '90%',
        height: window.width < 1127 ? window.height + 600 : 'auto',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
          fontVariant: ['small-caps'],
          textAlign: 'center',
          color: '#fff',
        }}
      >
        Detalhes
      </Text>
      <InputTopic
        value={subTitle}
        onChangeValue={onChangeSubTitle}
        topic="Sub-Título"
      />
      <InputTextArea
        value={sinopse}
        onChangeValue={onChangeSinopse}
        topic="Sinopse*"
        height={150}
        maxLength={1000}
        numberLines={12}
      />
      <InputTextArea
        value={resumo}
        onChangeValue={onChangeResumo}
        topic="Resumo"
        height={300}
        maxLength={5000}
        numberLines={12}
      />
    </View>
  )
}

export default InputsFormsLiterature

import React from 'react'
import { View } from 'react-native'

import { useFormProduct } from 'forms/Product'

import InputTextArea from '../../atoms/input-text-area'
import InputTopic from '../../atoms/input-topic'

const InputsForms = () => {
  const {
    onChangeResumo,
    onChangeSinopse,
    onChangeSubTitle,
    onChangeTitle,
    resumo,
    sinopse,
    subTitle,
    title,
  } = useFormProduct()

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <InputTopic value={title} onChangeValue={onChangeTitle} topic="Título" />
      <InputTopic
        value={subTitle}
        onChangeValue={onChangeSubTitle}
        topic="Sub-Título"
      />
      <InputTextArea
        value={sinopse}
        onChangeValue={onChangeSinopse}
        topic="Sinopse"
        height={150}
        maxLength={5000}
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

export default InputsForms

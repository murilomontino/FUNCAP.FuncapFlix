import React from 'react'
import { Text, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { useFormProductBook } from '@/forms/Product/product-book/hooks'

import InputISBN from '../../atoms/input-isbn'
import InputTextArea from '../../atoms/input-text-area'
import InputTopic from '../../atoms/input-topic'

const InputsFormsLiterature = () => {
  const {
    onChangeSobreAObra,
    onChangeSinopse,
    onChangeSubTitle,
    sobreAObra,
    sinopse,
    subTitle,
    onChangeTitle,
    title,
  } = useFormProductBook()

  const { window } = useDimensions()

  return (
    <View
      style={{
        maxWidth: '90%',
        minHeight: window.width < 1127 ? window.height : 'auto',
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
      <InputISBN />
      <InputTopic value={title} onChangeValue={onChangeTitle} topic="Título*" />
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
        value={sobreAObra}
        onChangeValue={onChangeSobreAObra}
        topic="Sobre a Obra"
        height={300}
        maxLength={5000}
        numberLines={12}
      />
    </View>
  )
}

export default InputsFormsLiterature

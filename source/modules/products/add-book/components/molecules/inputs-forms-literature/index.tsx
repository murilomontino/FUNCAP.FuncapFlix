import React from 'react'
import { Text, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import InputTextArea from '@/components/molecule/input-text-area'
import InputTopic from '@/components/molecule/input-topic'

import { useFormBook } from '@/forms/Product/product-book/hooks'

import InputISBN from '../../atoms/input-isbn'

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
  } = useFormBook()

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
      <InputTopic
        value={title}
        onChangeText={onChangeTitle}
        topic="Título"
        requered
      />
      <InputTopic
        value={subTitle}
        onChangeText={onChangeSubTitle}
        topic="Sub-Título"
      />
      <InputTextArea
        value={sinopse}
        requered
        onChangeValue={onChangeSinopse}
        topic="Sinopse"
        height={300}
        maxLength={1500}
        numberLines={12}
      />
      <InputTextArea
        value={sobreAObra}
        onChangeValue={onChangeSobreAObra}
        topic="Sobre a Obra"
        height={450}
        maxLength={5000}
        numberLines={12}
      />
    </View>
  )
}

export default InputsFormsLiterature

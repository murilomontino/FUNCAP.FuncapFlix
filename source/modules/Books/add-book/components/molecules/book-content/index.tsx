import React from 'react'
import { View } from 'react-native'

import { useFormProductBookContent } from '@/forms/Product/product-book/hooks'

import InputTopic from '../../atoms/input-topic'

const BookContent = () => {
  const {
    onChangeIllustrated,
    onChangeIllustrator,
    onChangeSize,
    onChangePublisher,
    onChangeNumberOfPages,
    size,
    illustrated,
    illustrator,
    numberOfPages,
    publisher,
  } = useFormProductBookContent()
  return (
    <View>
      <InputTopic
        value={publisher}
        onChangeValue={onChangePublisher}
        topic="Editora"
      />
      <InputTopic
        value={numberOfPages}
        onChangeValue={onChangeNumberOfPages}
        topic="Páginas"
        mask="9999"
        keyboardType="numeric"
        placeholder="Número de páginas"
      />
      <InputTopic
        value={illustrator}
        onChangeValue={onChangeIllustrator}
        topic="Ilustrador"
      />
    </View>
  )
}

export default BookContent

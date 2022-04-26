import React from 'react'
import { View } from 'react-native'

import InputTopic from '@/components/molecule/input-topic'
import InputTopicMasked from '@/components/molecule/input-topic-masked'

import { useFormBookContent } from '@/forms/Product/product-book/hooks'

const BookContent = () => {
  const {
    onChangeIllustrator,
    onChangeSize,
    onChangePublisher,
    onChangeNumberOfPages,
    size,
    illustrator,
    numberOfPages,
    publisher,
  } = useFormBookContent()
  return (
    <View
      style={{
        width: '80%',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <InputTopic
        value={publisher}
        onChangeText={onChangePublisher}
        topic="Editora"
        textAlign="center"
        styleViewInput={{
          flex: 1,
          fontSize: 14,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
        maxLength={50}
      />
      <InputTopicMasked
        value={numberOfPages}
        textAlign="center"
        onChangeText={onChangeNumberOfPages}
        topic="Num de páginas"
        mask="9999"
        keyboardType="numeric"
        placeholder="Páginas"
        styleViewInput={{
          flex: 1,
          fontSize: 14,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
        maxLength={4}
      />
      <InputTopicMasked
        value={size}
        onChangeText={onChangeSize}
        textAlign="center"
        topic="Dimensões"
        type="custom"
        options={{
          decimalSeparator: ',',
          fractionGroupSize: 3,
          fractionGroupSeparator: ' ',
          precision: 2,
        }}
        mask="99,9 x 99,9 x 99,9 cm"
        keyboardType="numeric"
        placeholder="Tamanho"
        styleViewInput={{
          flex: 1,
          fontSize: 14,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
      />

      <InputTopic
        value={illustrator}
        textAlign="center"
        onChangeText={onChangeIllustrator}
        topic="Ilustrador"
        placeholder="Ilustrador"
        styleViewInput={{
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
        maxLength={50}
      />
    </View>
  )
}

export default BookContent

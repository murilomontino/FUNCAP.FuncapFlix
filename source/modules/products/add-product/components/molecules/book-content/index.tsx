import React from 'react'
import { Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper'

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
        onChangeText={onChangePublisher}
        topic="Editora"
        viewInput={{
          flex: 1,
          fontSize: 14,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
        maxLength={50}
      />
      <InputTopic
        value={numberOfPages}
        onChangeText={onChangeNumberOfPages}
        topic="Num de páginas"
        mask="9999"
        keyboardType="numeric"
        placeholder="Páginas"
        viewInput={{
          flex: 1,
          fontSize: 14,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
        maxLength={4}
      />
      <InputTopic
        value={size}
        onChangeText={onChangeSize}
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
        viewInput={{
          flex: 1,
          fontSize: 14,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RadioButton
          value="Ilustrado"
          status={illustrated ? 'checked' : 'unchecked'}
          onPress={() => onChangeIllustrated(!illustrated)}
        />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 14,
            textDecorationStyle: 'dotted',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Foi ilustrado?
        </Text>
      </View>
      {illustrated && (
        <InputTopic
          value={illustrator}
          onChangeText={onChangeIllustrator}
          topic=""
          placeholder="Ilustrador"
          viewInput={{
            flex: 1,

            textAlign: 'center',
            textAlignVertical: 'center',
          }}
          maxLength={50}
        />
      )}
    </View>
  )
}

export default BookContent

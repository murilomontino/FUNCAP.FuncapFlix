import React from 'react'
import { Text, View } from 'react-native'

import InputTopic from '@/components/molecule/input-topic'
import InputTopicMasked from '@/components/molecule/input-topic-masked'

import { useFormBookContent } from '@/forms/Product/product-book/hooks'

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
  } = useFormBookContent()
  return (
    <View
      style={{
        marginLeft: 40,
        backgroundColor: '#red',
      }}
    >
      <InputTopic
        value={publisher}
        onChangeText={onChangePublisher}
        topic="Editora"
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <RadioButton
          value="Ilustrado"
          status={illustrated ? 'checked' : 'unchecked'}
          onPress={() => onChangeIllustrated(!illustrated)}
        /> */}
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
      {/*  {illustrated && (
        <InputTopic
          value={illustrator}
          onChangeText={onChangeIllustrator}
          topic=""
          placeholder="Ilustrador"
          styleViewInput={{
            flex: 1,

            textAlign: 'center',
            textAlignVertical: 'center',
          }}
          maxLength={50}
        />
      )} */}
    </View>
  )
}

export default BookContent

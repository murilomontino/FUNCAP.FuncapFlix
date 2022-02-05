import React from 'react'
import { View, Text } from 'react-native'

import { GetterBooks } from '@/types/generic/getters/books'

import { textStyles, viewStyles } from '../../styles'

type Props = {
  item: GetterBooks
}

const BookSinopse = ({ item }: Props) => {
  return (
    <View style={viewStyles.viewSinopse}>
      <Text
        style={[textStyles.sinopse]}
        numberOfLines={6}
        adjustsFontSizeToFit={true}
        ellipsizeMode="tail"
      >
        {(item.sinopse &&
          '      '.concat(item.sinopse.replace('\n', '\n      '))) ||
          'Sem Sinopse'}
      </Text>
    </View>
  )
}

export default BookSinopse

import React from 'react'
import { Platform, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { AttrsProducts } from 'types/Products'

import CacheImage from 'components/atom/cache-image'

import BookBasicInformation from '../../molecules/book-basic-information'
import BookFooter from '../../molecules/book-footer'
import BookSinopse from '../../molecules/book-sinopse'

import { viewStyles } from '../../styles'

type Props = {
  item: AttrsProducts
}

const CardBooks = ({ item }: Props) => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  return (
    <View style={[viewStyles.viewCard]}>
      <View style={viewStyles.viewContainerImage}>
        <View style={viewStyles.viewImage}>
          <CacheImage capa={item.capa} />
        </View>
      </View>
      <View style={[viewStyles.viewDetails]}>
        <BookBasicInformation item={item} />
        <BookSinopse item={item} />
        <BookFooter item={item} />
      </View>
    </View>
  )
}

export default CardBooks

import React from 'react'
import { Platform, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { ProductBook } from '@/types/generic/Products'

import CacheImage from '@/components/atom/cache-image'

import BookBasicInformation from '../../molecules/book-basic-information'
import BookFooter from '../../molecules/book-footer'
import BookSinopse from '../../molecules/book-sinopse'
import { viewStyles } from '../../styles'

type Props = {
  item: ProductBook
}

const CardBooks = ({ item }: Props) => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  // telas menores < 640

  return (
    <View
      style={[
        viewStyles.viewCard,
        size.width < 640 && {
          flexDirection: 'column',
        },
      ]}
    >
      <View
        style={
          (viewStyles.viewContainerImage,
          size.width < 640 && {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          })
        }
      >
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

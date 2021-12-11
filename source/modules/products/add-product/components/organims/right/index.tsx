import React from 'react'
import { View, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { Category } from '@/types/Products'

import { useFormProductCategory } from '@/forms/Product/hooks'

import SendFormBookButton from '../../atoms/send-form-book-button'
import InputTags from '../../atoms/tags'
import BookContent from '../../molecules/book-content'

const Right = () => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  const { category } = useFormProductCategory()

  return (
    <View
      style={{
        flex: 1,
        minHeight: size.width < 1127 ? 250 : size.height,
        marginRight: web ? 0 : 40,
        padding: 8,
        maxWidth: 300,
        justifyContent: 'space-around',
        borderLeftWidth: size.width < 1127 ? 0 : 1,
        borderColor: 'rgba(0,0,0, 0.4)',
      }}
    >
      {category === Category.Literature && <BookContent />}
      <InputTags />
      <SendFormBookButton />
    </View>
  )
}

export default Right

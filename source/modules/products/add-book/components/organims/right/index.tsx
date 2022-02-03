import React from 'react'
import { View, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import InputTags from '@/components/atom/tags'

import { useFormBookTags } from '@/forms/Product/product-book/hooks'

import SendFormBookButton from '../../atoms/send-form-book-button'
import BookContent from '../../molecules/book-content'

const Right = () => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  const { onChangeTags, tags } = useFormBookTags()

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        minHeight: size.width < 1127 ? 250 : size.height,
        marginRight: web ? 0 : 40,
        padding: 20,
        maxWidth: 300,
        justifyContent: 'flex-start',
      }}
    >
      <BookContent />
      <InputTags onChangeTags={onChangeTags} tags={tags} />
      <SendFormBookButton />
    </View>
  )
}

export default Right

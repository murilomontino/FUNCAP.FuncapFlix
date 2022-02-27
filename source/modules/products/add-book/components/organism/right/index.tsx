import React from 'react'
import { View } from 'react-native'

import InputTags from '@/components/atom/tags'

import { useFormBookTags } from '@/forms/Product/product-book/hooks'

import SendFormBookButton from '../../atoms/send-form-book-button'
import BookContent from '../../molecules/book-content'

import { useSize } from '@/hooks/use-size'

const Right = () => {
  const { web, size, SCREEN_SMALLER_THAN_LARGE_SIZE } = useSize()

  const { onChangeTags, tags } = useFormBookTags()

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        justifyContent: 'flex-start',
        minHeight: SCREEN_SMALLER_THAN_LARGE_SIZE ? 500 : size.height,
        marginRight: web ? 0 : 40,
        padding: 20,
        width: SCREEN_SMALLER_THAN_LARGE_SIZE ? size.width : 300,
      }}
    >
      <BookContent />
      <InputTags onChangeTags={onChangeTags} tags={tags} />
      <SendFormBookButton />
    </View>
  )
}

export default Right

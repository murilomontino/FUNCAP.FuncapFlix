import React from 'react'
import { View, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { Category } from '@/types'

import { useFormProductCategory } from '@/forms/Product/hooks'

import SendFormBookButton from '../../atoms/send-form-book-button'
import SendFormMusicButton from '../../atoms/send-form-music-button'
import InputTags from '../../atoms/tags'
import BookContent from '../../molecules/book-content'

const Right = () => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  const { category } = useFormProductCategory()

  const SendButtonCategory = () => {
    if (category === Category.Literature) {
      return <SendFormBookButton />
    } else if (category === Category.Music) {
      return <SendFormMusicButton />
    }
    return null
  }

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
      {category === Category.Literature && <BookContent />}
      <InputTags />
      <SendButtonCategory />
    </View>
  )
}

export default Right

import React, { useCallback, useMemo } from 'react'
import { Platform, Text, View } from 'react-native'
import { MaskedTextInput } from 'react-native-mask-text'

import { useLoading } from '@/context/LoadingModal'

import { useFormProductBook } from '@/forms/Product/product-book/hooks'

import { styles } from '../styles'

import useDebounce from '@/hooks/use-debounce'

const InputISBN = () => {
  const apiGoogle = 'https://www.googleapis.com/books/v1/volumes?q=isbn='
  const apiKey = '&maxResults=1&key=AIzaSyB6sfiUCwfRUDtlc_q1XsUDCvDzM4AsXNk'

  const { isbn, onChangeISBN } = useFormProductBook()
  const web = Platform.OS === 'web'

  const { setLoading } = useLoading()
  const debounce = useDebounce()

  const searchBook = useCallback(async (isbn: string) => {
    const response = await fetch(`${apiGoogle}${isbn}${apiKey}`)
    const data = await response.json()

    if (data.totalItems === 0) {
      return []
    }

    const { volumeInfo } = data.items[0]

    const mapBook = {
      title: volumeInfo.title,
      subtitle: volumeInfo.subtitle,
      authors: volumeInfo.authors,
      description: volumeInfo.description,
      image: volumeInfo.imageLinks.thumbnail,
      categories: volumeInfo.categories,
      publisher: volumeInfo.publisher,
      publishedDate: volumeInfo.publishedDate,
      pageCount: volumeInfo.pageCount,
    }

    return mapBook
  }, [])

  const onChangeSearch = (text: string, rawText: string) => {
    onChangeISBN(text)
    debounce(async () => {
      if (rawText.length === 13) {
        setLoading(true)
        await searchBook(rawText)
        setLoading(false)
      }
    }, 500)
  }

  const outlineWeb = useMemo(() => {
    return web ? styles.outlineWeb : styles.outline
  }, [])

  return (
    <View style={[styles.textAreaContainer]}>
      <View style={styles.viewTitle}>
        <Text style={styles.topicForm}>ISBN:</Text>
      </View>
      <MaskedTextInput
        value={isbn}
        onChangeText={(text, rawText) => onChangeSearch(text, rawText)}
        placeholder={'ISBN-13'}
        style={[styles.textArea, outlineWeb]}
        keyboardType={'numeric'}
        mask={'999-9999999999'}
      />
    </View>
  )
}

export default InputISBN

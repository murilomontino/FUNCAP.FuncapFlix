import React, { useCallback, useMemo } from 'react'
import { Platform, Text, View } from 'react-native'
import { MaskedTextInput } from 'react-native-mask-text'

import { useLoading } from '@/context/LoadingModal'
import { useToast } from '@/context/ToastModal'

import { useFormImage, useFormProductData } from '@/forms/Product/hooks'
import {
  useFormProductBook,
  useFormProductBookContent,
} from '@/forms/Product/product-book/hooks'

import api from '@/services'

import { styles } from '../styles'

import useDebounce from '@/hooks/use-debounce'

interface MapBook {
  title: string
  subtitle: string
  authors: Array<string>
  description: string
  image: string
  categories: Array<string>
  publisher: string
  publishedDate: string
  pageCount: string
}

const InputISBN = () => {
  const {
    isbn,
    onChangeISBN,
    onChangeSinopse,
    onChangeSubTitle,
    onChangeTitle,
  } = useFormProductBook()

  const { AlertToast } = useToast()

  const { onChangeNumberOfPages, onChangePublisher } =
    useFormProductBookContent()
  const { onChangePublishedDate, onChangeCulturalName } = useFormProductData()
  const { onChangeImageURL } = useFormImage()

  const web = Platform.OS === 'web'
  const outlineWeb = useMemo(() => {
    return web ? styles.outlineWeb : styles.outline
  }, [])
  const { showLoading, hideLoading } = useLoading()
  const debounce = useDebounce()

  const publishedDate = (publishedDate: string) => {
    if (publishedDate) {
      const date = new Date(publishedDate)
      return date.toLocaleDateString()
    }
    return ''
  }

  const searchBook = useCallback(async (isbn: string) => {
    const response = await api.get(`api-google-book/${isbn}`)

    if (response.status === 200) {
      const { data: volumeInfo } = response
      const mapBook: MapBook = {
        title: volumeInfo.title || '',
        subtitle: volumeInfo.subtitle || '',
        authors: volumeInfo.authors || [],
        description: volumeInfo.description || '',
        image: volumeInfo.imageLinks?.thumbnail || '',
        categories: volumeInfo.categories || [],
        publisher: volumeInfo.publisher || '',
        publishedDate: volumeInfo.publishedDate || '',
        pageCount: volumeInfo.pageCount || '',
      }

      onChangeSinopse(mapBook.description.slice(0, 1500))

      onChangeSubTitle(mapBook.subtitle)
      onChangeTitle(mapBook.title)
      onChangeImageURL(mapBook.image, mapBook.title)
      onChangePublisher(mapBook.publisher)
      onChangeNumberOfPages(mapBook.pageCount)

      onChangePublishedDate(publishedDate(mapBook.publishedDate))
      onChangeCulturalName(mapBook.authors.join(', '))

      return mapBook
    } else {
      console.log(response)

      AlertToast('warning', 'Livro não encontrado!')
      return null
    }
  }, [])

  const onChangeSearch = (text: string, rawText: string) => {
    onChangeISBN(text)
    debounce(async () => {
      if (rawText.length === 13) {
        showLoading()
        await searchBook(rawText)
        hideLoading()
      }
    }, 500)
  }

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

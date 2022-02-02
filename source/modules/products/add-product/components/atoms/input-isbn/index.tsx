import React, { useCallback, useMemo } from 'react'
import { Platform, Text, View } from 'react-native'
import { MaskedTextInput, mask } from 'react-native-mask-text'

import { AxiosResponse } from 'axios'

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

import tryCatch from '@/utils/try-catch'

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
  // Hooks e Fields ---------------------------------------------------------------
  const {
    isbn,
    onChangeISBN,
    onChangeSinopse,
    onChangeSubTitle,
    onChangeTitle,
  } = useFormProductBook()

  const { onChangeNumberOfPages, onChangePublisher } =
    useFormProductBookContent()
  const { onChangePublishedDate, onChangeCulturalName } = useFormProductData()
  const { onChangeImageURL } = useFormImage()

  // Efeito Visual ----------------------------------------------------------------
  const { AlertToast } = useToast()
  const { showLoading, hideLoading } = useLoading()

  // Efeito visual css para garantir uma borda alaranjada
  const web = Platform.OS === 'web'
  const outlineWeb = useMemo(() => {
    return web ? styles.outlineWeb : styles.outline
  }, [])

  // Função de efeito atraso em funções -------------------------------------------
  const debounce = useDebounce()

  // Corrige a data para o formato local ------------------------------------------
  const publishedDateLocale = (publishedDate: string) => {
    if (publishedDate) {
      const date = new Date(publishedDate).toLocaleDateString()
      return mask(date, '99/99/9999')
    }
    return ''
  }

  // Função que faz a busca do livro na api do google books ------------------------
  const searchBook = useCallback(async (isbn: string) => {
    // Busca o livro no google books
    const response = await tryCatch.run<AxiosResponse>(
      async () => await api.get(`api-google-book/${isbn}`)
    )

    // Caso ocorra algum erro na busca do livro
    if (response instanceof Error) {
      AlertToast('erro', response.message)
      return
    }

    // Caso ocorra um sucesso na busca do livro
    if (response && response.status === 200) {
      const { data: volumeInfo } = response

      // Caso o livro já tenha sido adicionado anteriormente ao banco de dados
      if (volumeInfo.exystBD) {
        AlertToast('warning', 'Este livro já está cadastrado')
        return
      }

      // Caso o livro não tenha sido adicionado anteriormente ao banco de dados
      // mapa os dados do livro para o formato do banco de dados
      // ---------------------------------------------------------------
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

      if (mapBook.image) {
        onChangeImageURL(mapBook.image, mapBook.title)
      }

      onChangePublisher(mapBook.publisher)
      onChangeNumberOfPages(mapBook.pageCount)

      const locale = publishedDateLocale(mapBook.publishedDate)

      onChangePublishedDate(locale)
      onChangeCulturalName(mapBook.authors.join(', '))

      return mapBook
    } else {
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

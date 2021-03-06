import React, { useCallback, useState } from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'
import { mask } from 'react-native-mask-text'

import { GetterBooks } from '@/types'

import { useToast } from '@/context/ToastModal'

import Topic from '@/components/atom/topic'

import {
  useFormBookThumbnail,
  useFormBookData,
  useFormBook,
  useFormBookContent,
} from '@/forms/Product/product-book/hooks'

import api from '@/services'
import { Getter } from '@/services/config/types'

import { Container, MaskedInput } from './styles'

import useDebounce from '@/hooks/use-debounce'

interface Props {
  requered?: boolean
  textAlign?: 'left' | 'center' | 'right'
}

const InputISBN = ({ requered = true, textAlign = 'left' }: Props) => {
  const [loading, setLoading] = useState(false)

  // Hooks e Fields ---------------------------------------------------------------
  const {
    isbn,
    onChangeISBN,
    onChangeSinopse,
    onChangeSubTitle,
    onChangeTitle,
  } = useFormBook()

  const [isbnValue, setIsbnValue] = useState(isbn)
  const { onChangeNumberOfPages, onChangePublisher } = useFormBookContent()
  const { onChangePublishedDate, onChangeCulturalName } = useFormBookData()
  const { onChangeImageURL } = useFormBookThumbnail()

  // Efeito Visual ----------------------------------------------------------------
  const { AlertToast } = useToast()

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
    const response = await api.get<Getter<GetterBooks>>(
      `api-google-book/${isbn}`
    )

    const { data } = response

    // Caso ocorra um sucesso na busca do livro
    if (data.statusCode === 200) {
      const { data: volumeInfo } = data

      // Caso o livro já tenha sido adicionado anteriormente ao banco de dados
      if (volumeInfo.existDB) {
        AlertToast('warning', 'Este livro já está cadastrado')
        return
      }

      // Caso o livro não tenha sido adicionado anteriormente ao banco de dados
      // mapa os dados do livro para o formato do banco de dados
      // ---------------------------------------------------------------

      onChangeSinopse(volumeInfo.sinopse.slice(0, 1500))
      onChangeSubTitle(volumeInfo.subTitulo)
      onChangeTitle(volumeInfo.titulo)

      if (volumeInfo.image) {
        onChangeImageURL(volumeInfo.image, volumeInfo.titulo)
      }

      onChangePublisher(volumeInfo.editora)
      onChangeNumberOfPages(volumeInfo.numero_de_paginas.toString())

      const locale = publishedDateLocale(volumeInfo.data_de_publicacao)

      onChangePublishedDate(locale)
      onChangeCulturalName(volumeInfo.autor)

      return volumeInfo
    } else {
      AlertToast('warning', 'Livro não encontrado!')
      return null
    }
  }, [])

  const onChangeSearch = (text: string, rawText: string) => {
    onChangeISBN(text)
    setIsbnValue(text)
    debounce(async () => {
      if (rawText.length === 13) {
        setLoading(true)
        await searchBook(rawText)
        setLoading(false)
      }
    }, 500)
  }

  return (
    <Container style={{ width: '100%' }}>
      <Modal visible={loading} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <ActivityIndicator size={'large'} color="#fff" />
        </View>
      </Modal>
      <Topic topic="ISBN" requered />
      <MaskedInput
        value={isbnValue}
        onChangeText={(text, rawText) => onChangeSearch(text, rawText)}
        placeholder={'ISBN-13'}
        keyboardType={'numeric'}
        mask={'999-9999999999'}
        style={{ textAlign }}
      />
    </Container>
  )
}

export default InputISBN

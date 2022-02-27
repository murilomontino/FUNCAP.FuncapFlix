import React, { useCallback, useEffect, useState } from 'react'

import * as DocumentPicker from 'expo-document-picker'

import { Category, TypesProducts } from '@/types'
import { createContext } from 'use-context-selector'

import { Document, FormProductBook } from '../types'

import { useAttrsProduct } from '@/hooks/use-attrs-product'

export const FormProductBookContext = createContext({} as FormProductBook)

const FormProductBookProvider: React.FC = ({ children }) => {
  const category = Category.Literature

  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [sinopse, setSinopse] = useState('')
  const [sobreAObra, setSobreAObra] = useState('')
  const [isbn, setISBN] = useState('')
  const [numberOfPages, setNumberOfPages] = useState('')
  const [publisher, setPublisher] = useState('')
  const [size, setSize] = useState('')
  const [illustrated, setIllustrated] = useState(false)
  const [illustrator, setIlustrador] = useState('')
  const [file, setFile] = useState({} as Document)

  // State -----------------------------------------------------------------------

  const {
    cpfOrCnpj,
    cpfOrCnpjIsValid,
    culturalName,
    financialResources,
    genres,
    tags,
    thumbnail,
    // onChange States
    onChangeCPForCNPJ,
    onChangeCPForCNPJIsValid,
    onChangeCulturalName,
    onChangeFinancialResources,
    onChangeGenres,
    onChangeTags,
    onChangeThumbnail,
  } = useAttrsProduct()

  const [type, setType] = useState(TypesProducts.PDF)

  const [publishedDate, setPublishedDate] = useState('')

  // cleanup ---------------------------------------------------------------------
  useEffect(() => {
    return () => {
      setTitle('')
      setSubTitle('')
      setSinopse('')
      setSobreAObra('')
      setISBN('')
      setNumberOfPages('')
      setPublisher('')
      setSize('')
      setIllustrated(false)
      setIlustrador('')
      setFile({} as Document)
      onChangeFinancialResources(0)
      onChangeGenres([])
      onChangeTags([])
      onChangeThumbnail({} as Document)
      setType(TypesProducts.MP3)
      onChangeCPForCNPJ('')
      onChangeCPForCNPJIsValid(false)
      setPublishedDate('')
      onChangeCulturalName('')
    }
  }, [])

  const onChangeIllustrator = useCallback(
    (text: string) => {
      setIlustrador(text)
    },
    [illustrator]
  )
  const onChangeNumberOfPages = useCallback(
    (text: string) => {
      setNumberOfPages(text)
    },
    [numberOfPages]
  )

  const onChangePublisher = useCallback(
    (text: string) => {
      setPublisher(text)
    },
    [publisher]
  )

  const onChangeSize = useCallback(
    (text: string) => {
      setSize(text)
    },
    [size]
  )

  const onChangeIllustrated = useCallback(
    (value: boolean) => {
      setIllustrated(value)
    },
    [illustrated]
  )

  const onChangeISBN = useCallback(
    (value: string) => {
      setISBN(value)
    },
    [isbn]
  )

  const onChangeTitle = useCallback(
    (text: string) => {
      setTitle(text)
    },
    [title]
  )
  const onChangeSubTitle = useCallback(
    (text: string) => {
      setSubTitle(text)
    },
    [subTitle]
  )
  const onChangeSobreAObra = useCallback(
    (text: string) => {
      setSobreAObra(text)
    },
    [sobreAObra]
  )

  const onChangeSinopse = useCallback(
    (text: string) => {
      setSinopse(text)
    },
    [sinopse]
  )

  const onChangeFile = useCallback(async () => {
    const obj = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
      copyToCacheDirectory: true,
    })

    if (obj && obj.type === 'success') {
      setFile(obj as unknown as Document)
      return true
    }

    return false
  }, [file])

  const onChangePublishedDate = useCallback(
    (date: string) => {
      setPublishedDate(date)
    },
    [publishedDate]
  )

  const onChangeImageURL = useCallback(
    (value: string, title: string) => {
      onChangeThumbnail({
        type: 'success',
        name: title,
        uri: value,
      } as Document)
    },
    [thumbnail]
  )

  const onChangeType = useCallback(
    (value: number) => {
      setType(value)
    },
    [type]
  )

  const resetProductBook = useCallback(() => {
    setTitle('')
    setSubTitle('')
    setSinopse('')
    setSobreAObra('')
    setISBN('')
    setNumberOfPages('')
    setPublisher('')
    setSize('')
    setIllustrated(false)
    setIlustrador('')
    setFile({} as Document)
    onChangeGenres([])
    onChangeTags([])
    onChangeThumbnail({} as Document)
    onChangeCPForCNPJ('')
    onChangeCPForCNPJIsValid(false)
    setPublishedDate('')
    onChangeCulturalName('')
  }, [])

  return (
    <FormProductBookContext.Provider
      value={{
        category,
        thumbnail,
        cpfOrCnpj,
        cpfOrCnpjIsValid,
        culturalName,
        financialResources,
        genres,
        tags,
        publishedDate,
        type,
        title,
        subTitle,
        sinopse,
        sobreAObra,
        isbn,
        illustrated,
        numberOfPages,
        publisher,
        size,
        illustrator,
        file,
        onChangeGenres,
        onChangeThumbnail,
        onChangeCPForCNPJ,
        onChangeCPForCNPJIsValid,
        onChangeCulturalName,
        onChangeFinancialResources,
        onChangeImageURL,
        onChangePublishedDate,
        onChangeTags,
        onChangeType,
        onChangeFile,
        onChangeIllustrator,
        onChangeNumberOfPages,
        onChangePublisher,
        onChangeSize,
        onChangeIllustrated,
        onChangeISBN,
        onChangeTitle,
        onChangeSobreAObra,
        onChangeSinopse,
        onChangeSubTitle,
        resetProductBook,
      }}
    >
      {children}
    </FormProductBookContext.Provider>
  )
}

export default FormProductBookProvider

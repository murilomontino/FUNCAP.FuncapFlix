import React, { useCallback, useEffect, useState } from 'react'

import * as DocumentPicker from 'expo-document-picker'

import { Category, FinancialResources, TypesProducts } from '@/types'
import { createContext } from 'use-context-selector'

import { Document, FormProductBook } from '../types'

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
  const [financialResources, setFinancialResources] = useState(0)
  const [genero, setGenero] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [capa, setCapa] = useState({} as Document)
  const [type, setType] = useState(TypesProducts.PDF)
  const [cpfOrCnpj, SetCPForCNPJ] = useState('')
  const [cpfOrCnpjIsValid, SetCPForCNPJIsValid] = useState(false)
  const [publishedDate, setPublishedDate] = useState('')
  const [culturalName, setCulturalName] = useState('')

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
      setFinancialResources(0)
      setGenero([])
      setTags([])
      setCapa({} as Document)
      setType(TypesProducts.MP3)
      SetCPForCNPJ('')
      SetCPForCNPJIsValid(false)
      setPublishedDate('')
      setCulturalName('')
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

  const onChangeCulturalName = useCallback(
    (value: string) => {
      setCulturalName(value)
    },
    [culturalName]
  )

  const onChangeImageURL = useCallback((value: string, title: string) => {
    setCapa({
      type: 'success',
      name: title,
      uri: value,
    } as Document)
  }, [])

  const onChangeFinancialResources = useCallback(
    (value: FinancialResources) => {
      setFinancialResources(value)
    },
    [financialResources]
  )

  const onChangeCPForCNPJ = useCallback(
    (text: string) => {
      SetCPForCNPJ(text)
    },
    [cpfOrCnpj]
  )

  const onChangeCPForCNPJIsValid = useCallback(
    (value: boolean) => {
      SetCPForCNPJIsValid(value)
    },
    [cpfOrCnpjIsValid]
  )
  const onChangeType = useCallback(
    (value: number) => {
      setType(value)
    },
    [type]
  )
  const onChangeImage = useCallback(
    async (image: DocumentPicker.DocumentResult) => {
      if (image.type === 'success') {
        setCapa(image)
      }
    },
    [capa]
  )

  const onChangeGeneros = useCallback(
    (generos: string[]) => {
      setGenero(generos)
    },
    [genero]
  )
  const onChangeTags = useCallback(
    (tags: string[]) => {
      setTags(tags)
    },
    [tags]
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
    setGenero([])
    setTags([])
    setCapa({} as Document)
    SetCPForCNPJ('')
    SetCPForCNPJIsValid(false)
    setPublishedDate('')
    setCulturalName('')
  }, [])

  return (
    <FormProductBookContext.Provider
      value={{
        category,
        capa,
        cpfOrCnpj,
        cpfOrCnpjIsValid,
        culturalName,
        financialResources,
        genero,
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
        onChangeImage,
        onChangeCPForCNPJ,
        onChangeCPForCNPJIsValid,
        onChangeCulturalName,
        onChangeFinancialResources,
        onChangeGeneros,
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

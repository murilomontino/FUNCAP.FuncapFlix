import React, { useCallback, useEffect, useState } from 'react'

import * as DocumentPicker from 'expo-document-picker'

import { Category, FinancialResources, TypesProducts } from '@/types'
import { createContext } from 'use-context-selector'

import FormProductBookProvider from './product-book'
import FormProductMusicProvider from './product-music'
import { Document, FormProduct } from './types'

export const FormProductContext = createContext({} as FormProduct)

interface Props {
  initialCategory: Category
}

const FormProductProvider: React.FC<Props> = ({
  children,
  initialCategory,
}) => {
  // State -----------------------------------------------------------------------
  const [financialResources, setFinancialResources] = useState(0)
  const [genero, setGenero] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [capa, setCapa] = useState({} as Document)
  const [category, setCategory] = useState<Category>(0)
  const [type, setType] = useState(TypesProducts.URL)
  const [cpfOrCnpj, SetCPForCNPJ] = useState('')
  const [cpfOrCnpjIsValid, SetCPForCNPJIsValid] = useState(false)
  const [publishedDate, setPublishedDate] = useState('')
  const [culturalName, setCulturalName] = useState('')

  useEffect(() => {
    if (initialCategory) {
      onChangeCategory(initialCategory)
    }

    return () => {
      setCategory(0)
    }
  }, [category])

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

  const getImage = useCallback(async () => {
    const obj = await DocumentPicker.getDocumentAsync({
      type: ['image/png', 'image/jpeg'],
    })

    if (obj.type === 'success') {
      setCapa(obj)

      return true
    }

    return false
  }, [capa])

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

  const resetProduct = () => {
    setGenero([])
    setTags([])
    setCapa({} as Document)
    setPublishedDate('')
    setCulturalName('')
    SetCPForCNPJ('')
    SetCPForCNPJIsValid(false)
  }

  const onChangeCategory = useCallback(
    (value: Category) => {
      resetProduct()
      setCategory(value)

      switch (value) {
        case Category.Literature:
          setType(TypesProducts.PDF)

          break
        case Category.Music:
          setType(TypesProducts.MP3)

          break
        case Category.Video:
          setType(TypesProducts.URL)

          break
        default:
          break
      }
    },
    [category]
  )

  return (
    <FormProductContext.Provider
      value={{
        genero,
        tags,
        type,
        capa,
        category,
        cpfOrCnpj,
        cpfOrCnpjIsValid,
        financialResources,
        culturalName,
        onChangeCulturalName,
        onChangePublishedDate,
        publishedDate,
        onChangeImageURL,
        onChangeFinancialResources,
        onChangeCPForCNPJ,
        onChangeCPForCNPJIsValid,
        onChangeCategory,
        onChangeType,
        getImage,
        onChangeGeneros,
        onChangeTags,
        resetProduct,
      }}
    >
      <FormProductBookProvider category={category}>
        <FormProductMusicProvider category={category}>
          {children}
        </FormProductMusicProvider>
      </FormProductBookProvider>
    </FormProductContext.Provider>
  )
}

export default FormProductProvider

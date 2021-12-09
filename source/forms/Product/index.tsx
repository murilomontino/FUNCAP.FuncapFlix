import React, { useCallback, useState } from 'react'

import * as DocumentPicker from 'expo-document-picker'

import { Category, FinancialResources, TypesProducts } from '@/types/Products'
import { createContext } from 'use-context-selector'

import FormProductBookProvider from './product-book'
import FormProductMusicProvider from './product-music'
import { Document, FormProduct } from './types'

export const FormProductContext = createContext({} as FormProduct)

const mapTypeProduct: { [key in TypesProducts]: string } = {
  [TypesProducts.PDF]: 'application/pdf',
  [TypesProducts.MP3]: 'audio/mp3',
  [TypesProducts.URL]: 'text/url',
}

const FormProductProvider: React.FC = ({ children }) => {
  const [financialResources, setFinancialResources] = useState(0)
  const [genero, setGenero] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [capa, setCapa] = useState({} as Document)
  const [file, setFile] = useState({} as Document)
  const [category, setCategory] = useState(0)
  const [type, setType] = useState(TypesProducts.URL)
  const [cpfOrCnpj, SetCPForCNPJ] = useState('')
  const [cpfOrCnpjIsValid, SetCPForCNPJIsValid] = useState(false)

  const resetProduct = useCallback(() => {
    setFinancialResources(0)
    setGenero([])
    setTags([])
    setCapa({} as Document)
    setFile({} as Document)
    setType(TypesProducts.URL)
    SetCPForCNPJ('')
    SetCPForCNPJIsValid(false)
  }, [])

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

  const onChangeType = useCallback(
    (value: number) => {
      setType(value)
    },
    [type]
  )

  const onChangeFile = useCallback(async () => {
    const obj = await DocumentPicker.getDocumentAsync({
      type: mapTypeProduct[type],
    })

    if (obj && obj.type === 'success') {
      setFile(obj)
      return true
    }

    return false
  }, [file, type])

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
        file,
        onChangeImageURL,
        onChangeFile,
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
      <FormProductBookProvider>
        <FormProductMusicProvider>{children}</FormProductMusicProvider>
      </FormProductBookProvider>
    </FormProductContext.Provider>
  )
}

export default FormProductProvider

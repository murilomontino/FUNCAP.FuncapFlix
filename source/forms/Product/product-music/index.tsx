import React, { useCallback, useEffect, useState } from 'react'
import { Platform } from 'react-native'

import * as DocumentPicker from 'expo-document-picker'
import { DocumentResult } from 'expo-document-picker'

import {
  Category,
  FinancialResources,
  TypeMusicAlbums,
  TypesProducts,
} from '@/types'
import { createContext } from 'use-context-selector'

import { useLoading } from '@/context/LoadingModal'

import { Document, FormProductMusic, DocumentFile } from '../types'

export const FormProductMusicContext = createContext({} as FormProductMusic)

const FormProductMusicProvider: React.FC = ({ children }) => {
  const { showLoading, hideLoading } = useLoading()
  const category = Category.Music

  const [titleAlbum, setTitleAlbum] = useState('')
  const [titleMusics, setTitleMusics] = useState([] as string[])
  const [file, setFile] = useState([] as Document[])
  const [durations, setDurations] = useState([])
  const [content, setContent] = useState<TypeMusicAlbums>(0)
  const [composers, setComposers] = useState([] as string[])

  // State -----------------------------------------------------------------------
  const [financialResources, setFinancialResources] = useState(0)
  const [genero, setGenero] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [capa, setCapa] = useState({} as DocumentPicker.DocumentResult)
  const [type, setType] = useState(TypesProducts.MP3)
  const [cpfOrCnpj, SetCPForCNPJ] = useState('')
  const [cpfOrCnpjIsValid, SetCPForCNPJIsValid] = useState(false)
  const [publishedDate, setPublishedDate] = useState('')
  const [culturalName, setCulturalName] = useState('')

  // cleanup ---------------------------------------------------------------------
  useEffect(() => {
    return () => {
      setTitleAlbum('')
      setTitleMusics([])
      setFile([])
      setDurations([])
      setContent(0)
      setComposers([])
      setFinancialResources(0)
      setGenero([])
      setTags([])
      setCapa({} as DocumentPicker.DocumentResult)
      setType(TypesProducts.MP3)
      SetCPForCNPJ('')
      SetCPForCNPJIsValid(false)
      setPublishedDate('')
      setCulturalName('')
    }
  }, [])

  const web = Platform.OS === 'web'

  function fileReader(fileList: Document.Output) {
    return Promise.all(
      Object.keys(fileList).map(
        (_key, i) =>
          new Promise((resolve) => {
            const reader = new FileReader()
            const file = fileList[i]

            reader.onload = () => {
              resolve({
                type: 'success',
                uri: reader.result as string,
                name: file.name,
                size: file.size,
                mimeType: file.type,
              })
            }

            reader.readAsDataURL(file as unknown as Blob)
          })
      )
    )
  }

  const onChangeFile = useCallback(async () => {
    try {
      const documents: DocumentResult = await DocumentPicker.getDocumentAsync({
        type: ['audio/mp3'],
        multiple: true,
        copyToCacheDirectory: true,
      }).finally(() => hideLoading())
      showLoading()

      if (documents && documents.type === 'success') {
        const files: Array<DocumentFile> = web
          ? await fileReader(documents.output)
          : documents.file

        setFile([...file, ...files])

        const newTitle = [...titleMusics, ...files.map((file) => file.name)]
        setTitleMusics(newTitle)

        return true
      }
    } catch (error) {
      return false
    } finally {
      hideLoading()
    }
  }, [file, titleMusics])

  const onChangeContent = useCallback(
    (value: number) => {
      setContent(value)
    },
    [content]
  )

  const onChangeTitleMusics = useCallback(
    (value: string, index: number) => {
      const newTitle = [...titleMusics]
      newTitle[index] = value
      setTitleMusics(newTitle)
    },
    [titleMusics]
  )

  const onRemoveMusic = useCallback(
    (index: number) => {
      const newTitle = [...titleMusics]
      newTitle.splice(index, 1)
      setTitleMusics(newTitle)

      const newFile = [...file]
      newFile.splice(index, 1)
      setFile(newFile)

      const newDurations = [...durations]
      newDurations.splice(index, 1)
      setDurations(newDurations)

      const newComposers = [...composers]
      newComposers.splice(index, 1)
      setComposers(newComposers)
    },
    [titleMusics, file, durations]
  )

  const onChangeComposers = useCallback(
    (value: string, index: number) => {
      const newComposers = [...composers]
      newComposers[index] = value
      setComposers(newComposers)
    },
    [composers]
  )

  const onChangeDurations = useCallback(
    (value: string, index: number) => {
      const newDurations = [...durations]
      newDurations[index] = value
      setDurations(newDurations)
    },
    [durations]
  )

  const onChangeTitleAlbum = useCallback(
    (value: string) => {
      setTitleAlbum(value)
    },
    [titleAlbum]
  )

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

  const resetProductMusic = useCallback(() => {
    setTitleMusics([])
    setTitleAlbum('')
    setFile([])
    setContent(0)
    setComposers([])
    setDurations([])
    setFile([])
    setGenero([])
    setTags([])
    setCapa({} as DocumentPicker.DocumentResult)
    SetCPForCNPJ('')
    SetCPForCNPJIsValid(false)
    setPublishedDate('')
    setCulturalName('')
  }, [])

  return (
    <FormProductMusicContext.Provider
      value={{
        titleAlbum,
        capa,
        category,
        cpfOrCnpj,
        cpfOrCnpjIsValid,
        culturalName,
        financialResources,
        genero,
        onChangeCPForCNPJ,
        onChangeCPForCNPJIsValid,
        onChangeCulturalName,
        onChangeFinancialResources,
        onChangeGeneros,
        onChangeImageURL,
        onChangePublishedDate,
        onChangeTags,
        onChangeType,
        onChangeImage,
        publishedDate,
        tags,
        type,
        titleMusics,
        content,
        file,
        durations,
        composers,
        onChangeContent,
        onChangeFile,
        onChangeTitleAlbum,
        onChangeTitleMusics,
        onChangeDurations,
        resetProductMusic,
        onChangeComposers,
        onRemoveMusic,
      }}
    >
      {children}
    </FormProductMusicContext.Provider>
  )
}

export default FormProductMusicProvider

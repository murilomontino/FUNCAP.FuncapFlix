import React, { useCallback, useEffect, useState } from 'react'
import { Platform } from 'react-native'

import * as DocumentPicker from 'expo-document-picker'
import { DocumentResult } from 'expo-document-picker'

import { Category, TypeMusicAlbums, TypesProducts } from '@/types'
import { createContext } from 'use-context-selector'

import { useLoading } from '@/context/LoadingModal'

import { Document, DocumentFile } from '../types'
import { FormProductMusic } from './types'

import { useAttrsProduct } from '@/hooks/use-attrs-product'
import { useAttrsTracksFiles } from '@/hooks/use-attrs-tracks-files'

export const FormProductMusicContext = createContext({} as FormProductMusic)

const FormProductMusicProvider: React.FC = ({ children }) => {
  const { showLoading, hideLoading } = useLoading()
  const category = Category.Music

  const [titleAlbum, setTitleAlbum] = useState('')
  const [content, setContent] = useState<TypeMusicAlbums>(0)

  // State -----------------------------------------------------------------------
  const [type, setType] = useState(TypesProducts.MP3)
  const [publishedDate, setPublishedDate] = useState('')

  const {
    file,
    mapFiles,
    onChangeAttrTrack,
    onChangeFile: onChangeInitMapFiles,
    onChangeMapFiles,
    onRemoveTrack,
  } = useAttrsTracksFiles()

  const {
    cpfOrCnpj,
    cpfOrCnpjIsValid,
    culturalName,
    financialResources,
    genres,
    onChangeCPForCNPJ,
    onChangeCPForCNPJIsValid,
    onChangeCulturalName,
    onChangeFinancialResources,
    onChangeGenres,
    onChangeTags,
    onChangeThumbnail,
    tags,
    thumbnail,
  } = useAttrsProduct()
  // cleanup ---------------------------------------------------------------------
  useEffect(() => {
    return () => {
      setTitleAlbum('')
      setContent(0)
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

        onChangeInitMapFiles([...file, ...files])

        return true
      }
    } catch (error) {
      return false
    } finally {
      hideLoading()
    }
  }, [file])

  const onChangeContent = useCallback(
    (value: number) => {
      setContent(value)
    },
    [content]
  )

  const onChangeTitleMusics = useCallback(
    (value: string, index: number) => {
      onChangeAttrTrack(value, index, 'titulo')
    },
    [mapFiles]
  )

  const onRemoveMusic = useCallback(
    (index: number) => {
      onRemoveTrack(index)
    },
    [mapFiles]
  )

  const onChangeComposers = useCallback(
    (value: string, index: number) => {
      onChangeAttrTrack(value, index, 'compositor')
    },
    [mapFiles]
  )

  const onChangeDurations = useCallback(
    (value: string, index: number) => {
      onChangeAttrTrack(value, index, 'duracao')
    },
    [mapFiles]
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

  const onChangeImageURL = useCallback((value: string, title: string) => {
    onChangeThumbnail({
      type: 'success',
      name: title,
      uri: value,
    } as Document)
  }, [])

  const onChangeType = useCallback(
    (value: number) => {
      setType(value)
    },
    [type]
  )

  const resetProductMusic = useCallback(() => {
    setTitleAlbum('')
    setContent(0)
    onChangeGenres([])
    onChangeTags([])
    onChangeThumbnail({} as Document)
    onChangeCPForCNPJ('')
    onChangeCPForCNPJIsValid(false)
    setPublishedDate('')
    onChangeCulturalName('')
    onChangeInitMapFiles([])
    onChangeMapFiles([])
  }, [])

  return (
    <FormProductMusicContext.Provider
      value={{
        titleAlbum,
        thumbnail,
        category,
        cpfOrCnpj,
        cpfOrCnpjIsValid,
        culturalName,
        financialResources,
        genres,
        onChangeMapFiles,
        onChangeCPForCNPJ,
        onChangeCPForCNPJIsValid,
        onChangeCulturalName,
        onChangeFinancialResources,
        onChangeGenres,
        onChangeImageURL,
        onChangePublishedDate,
        onChangeTags,
        onChangeType,
        onChangeThumbnail,
        publishedDate,
        tags,
        type,
        content,
        file,
        onChangeContent,
        onChangeFile,
        onChangeTitleAlbum,
        onChangeTitleMusics,
        onChangeDurations,
        resetProductMusic,
        onChangeComposers,
        onRemoveMusic,
        onChangeAttrTrack,
        mapFiles,
        onRemoveTrack,
      }}
    >
      {children}
    </FormProductMusicContext.Provider>
  )
}

export default FormProductMusicProvider

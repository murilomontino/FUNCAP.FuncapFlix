import React, { useCallback, useEffect, useState } from 'react'
import { Platform } from 'react-native'

import * as DocumentPicker from 'expo-document-picker'
import { DocumentResult } from 'expo-document-picker'

import { Category, TypeMusicAlbuns } from '@/types'
import { createContext } from 'use-context-selector'

import { Document, FormProductMusic, DocumentFile } from '../types'

export const FormProductMusicContext = createContext({} as FormProductMusic)

type Props = {
  category: Category
}

const FormProductMusicProvider: React.FC<Props> = ({ children, category }) => {
  const [titleAlbum, setTitleAlbum] = useState('')
  const [titleMusics, setTitleMusics] = useState([] as string[])
  const [file, setFile] = useState([] as Document[])
  const [content, setContent] = useState<TypeMusicAlbuns>(0)

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
    const documents: DocumentResult = await DocumentPicker.getDocumentAsync({
      type: 'audio/mp3',
      multiple: true,
      copyToCacheDirectory: true,
    })

    if (documents && documents.type === 'success') {
      const files: Array<DocumentFile> = web
        ? await fileReader(documents.output)
        : documents.file

      setFile([...file, ...files])

      const newTitle = [...titleMusics, ...files.map((file) => file.name)]
      setTitleMusics(newTitle)

      return true
    }

    return false
  }, [file, titleMusics])

  useEffect(() => {
    return () => {
      resetProductMusic()
    }
  }, [category])

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

  const onChangeTitleAlbum = useCallback(
    (value: string) => {
      setTitleAlbum(value)
    },
    [titleAlbum]
  )

  const resetProductMusic = useCallback(() => {
    setTitleMusics([])
  }, [])

  return (
    <FormProductMusicContext.Provider
      value={{
        titleAlbum,
        titleMusics,
        content,
        file,
        onChangeContent,
        onChangeFile,
        onChangeTitleAlbum,
        onChangeTitleMusics,
        resetProductMusic,
      }}
    >
      {children}
    </FormProductMusicContext.Provider>
  )
}

export default FormProductMusicProvider

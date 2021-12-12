import React, { useCallback, useEffect, useState } from 'react'
import { Platform } from 'react-native'

import * as DocumentPicker from 'expo-document-picker'
import { DocumentResult } from 'expo-document-picker'

import { Category } from '@/types/Products'
import { createContext } from 'use-context-selector'

import { Document, FormProductMusic } from '../types'

export const FormProductMusicContext = createContext({} as FormProductMusic)

type Props = {
  category: Category
}

const FormProductMusicProvider: React.FC<Props> = ({ children, category }) => {
  const [title, setTitle] = useState<Array<string>>([])
  const [file, setFile] = useState([] as Document[])

  const web = Platform.OS === 'web'

  function fileReader(fileList: any) {
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
            reader.readAsDataURL(file)
          })
      )
    )
  }

  const onChangeFile = useCallback(async () => {
    const obj: DocumentResult = await DocumentPicker.getDocumentAsync({
      type: 'audio/mp3',
      multiple: true,
      copyToCacheDirectory: true,
    })

    if (obj && obj.type === 'success') {
      const files = web ? await fileReader(obj.output) : obj.file
      setFile(files)
      console.log(files)

      return true
    }

    return false
  }, [file])

  useEffect(() => {
    return () => {
      resetProductMusic()
    }
  }, [category])

  const onChangeTitle = useCallback(
    (text: Array<string>) => {
      setTitle(text)
    },
    [title]
  )

  const resetProductMusic = useCallback(() => {
    setTitle([])
  }, [])

  return (
    <FormProductMusicContext.Provider
      value={{
        title,
        file,
        onChangeFile,
        onChangeTitle,
        resetProductMusic,
      }}
    >
      {children}
    </FormProductMusicContext.Provider>
  )
}

export default FormProductMusicProvider

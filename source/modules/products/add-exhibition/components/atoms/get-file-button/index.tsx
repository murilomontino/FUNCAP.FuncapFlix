import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import * as DocumentPicker from 'expo-document-picker'
import { DocumentResult } from 'expo-document-picker'

import { Document } from '@/forms/Product/types'

import { styles } from '../styles'

type mimeType =
  | 'application/pdf'
  | 'image/jpeg'
  | 'image/png'
  | 'image/jpg'
  | 'audio/mp3'

type Props = {
  requered?: boolean
  message?: string
  type: mimeType[]
  multiple?: boolean
  onChangeFiles: (files: Document[]) => void
  files: Document[]
}

export const GetFileButton = ({
  requered = true,
  message = 'Selecione um arquivo',
  type,
  multiple = false,
  files,
  onChangeFiles,
}: Props) => {
  // Busca um arquivo no formato PDF

  function fileReader(fileList: unknown) {
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

  const onChangeFile = async () => {
    try {
      const documents: DocumentResult = await DocumentPicker.getDocumentAsync({
        type: type,
        multiple,
        copyToCacheDirectory: true,
      })

      if (documents.type === 'success') {
        const newFiles: Document[] = (await fileReader(
          documents.output
        )) as Document[]
        onChangeFiles(newFiles)
        return true
      }
    } catch (error) {
      return false
    }
  }

  return (
    <TouchableOpacity style={[styles.buttonContainer]} onPress={onChangeFile}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 14,
            fontWeight: '500',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          {!multiple ? files[0]?.name || message : message}
        </Text>
        {requered && <Text style={styles.topicRequered}>*</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default GetFileButton

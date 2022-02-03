import React from 'react'
import { Button } from 'react-native-paper'

import { useFormBookFile } from '@/forms/Product/product-book/hooks'

import { styles } from '../styles'

export const GetFileButton = () => {
  // Busca um arquivo no formato PDF

  const { file, onChangeFile } = useFormBookFile()

  return (
    <Button
      style={[styles.buttonContainer]}
      color="#fff"
      onPress={onChangeFile}
    >
      {file?.name || `Escolher Livro`}
    </Button>
  )
}

export default GetFileButton

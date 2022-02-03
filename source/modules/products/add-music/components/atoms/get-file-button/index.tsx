import React from 'react'
import { Button } from 'react-native-paper'

import { Category } from '@/types'

import { useFormMusicsFile } from '@/forms/Product/product-music/hooks'

import { styles } from '../styles'

type Props = {
  category: Category
}
export const GetFileButton = ({ category }: Props) => {
  // Busca um arquivo no formato MP3
  const { onChangeFile } = useFormMusicsFile()

  return (
    <Button
      style={[styles.buttonContainer]}
      color="#fff"
      onPress={onChangeFile}
    >
      Escolher Músicas
    </Button>
  )
}

export default GetFileButton

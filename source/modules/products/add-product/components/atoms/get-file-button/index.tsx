import React from 'react'
import { Button } from 'react-native-paper'

import { Category } from '@/types'

import { useFormBookFile } from '@/forms/Product/product-book/hooks'
import { useFormMusicsFile } from '@/forms/Product/product-music/hooks'

import { styles } from '../styles'

type Props = {
  category: Category
}
export const GetFileButton = ({ category }: Props) => {
  // Busca um arquivo no formato PDF
  if (category === Category.Literature) {
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

  // Busca um arquivo no formato MP3
  if (category === Category.Music) {
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

  return <Button>Indefindo</Button>
}

export default GetFileButton

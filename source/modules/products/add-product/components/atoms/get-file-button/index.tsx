import React from 'react'
import { Button } from 'react-native-paper'

import { Category } from '@/types/Products'

import { useFormBookFile } from '@/forms/Product/product-book/hooks'
import { useFormMusicsFile } from '@/forms/Product/product-music/hooks'

import { styles } from '../styles'

type Props = {
  category: Category
}
export const GetFileButton = ({ category }: Props) => {
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
  if (category === Category.Music) {
    const { file, onChangeFile } = useFormMusicsFile()

    return (
      <Button
        style={[styles.buttonContainer]}
        color="#fff"
        onPress={onChangeFile}
      >
        {file?.name || `Escolher Músicas`}
      </Button>
    )
  }

  return <Button>Indefinido</Button>
}

export default GetFileButton

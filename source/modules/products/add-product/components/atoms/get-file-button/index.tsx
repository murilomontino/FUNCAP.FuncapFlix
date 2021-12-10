import React from 'react'
import { Button } from 'react-native-paper'

import { TypesProducts } from '@/types/Products'

import {
  useFormProductFile,
  useFormProductCategory,
} from '@/forms/Product/hooks'

import { styles } from '../styles'

const mapTypeProduct: { [key in TypesProducts]: string } = {
  [TypesProducts.PDF]: 'Livro',
  [TypesProducts.MP3]: 'Música',
  [TypesProducts.URL]: 'URL',
}

const GetFileButton = () => {
  const { onChangeFile, file } = useFormProductFile()
  const { type } = useFormProductCategory()

  return (
    <Button
      style={[styles.buttonContainer]}
      color="#fff"
      onPress={onChangeFile}
    >
      {file.name || `Escolher ${mapTypeProduct[type]}`}
    </Button>
  )
}

export default GetFileButton

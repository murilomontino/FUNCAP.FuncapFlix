import React from 'react'
import { Text, TouchableHighlight } from 'react-native'

import {
  useFormProductGenero,
  useFormProductTags,
  useFormImage,
  useFormPDF,
  useFormProduct,
} from 'forms/Product'
import colors from 'global/colors'
import { InsertProductsAttributes } from 'types/Products'

import api from 'services'

const SendFormButtonProduct = () => {
  const { tags } = useFormProductTags()
  const { genero } = useFormProductGenero()
  const { resumo, sinopse, subTitle, title } = useFormProduct()
  const { image } = useFormImage()
  const { pdf } = useFormPDF()

  const sendForm = async () => {
    if (pdf.type === 'success') {
      const document: InsertProductsAttributes = {
        tipo: 0,
        nome_arquivo: pdf.name,
        genero: genero,
        tags: tags,
        resumo: resumo,
        sinopse: sinopse,
        categoria: 0,
        sub_titulo: subTitle,
        titulo: title,
        arquivo: pdf.uri,
        capa: image.type === 'success' ? image.uri : undefined,
        tipo_capa: image.type === 'success' ? image.mimeType : undefined,
      }
      const response = await api.post('add-book', document)
    }
  }

  return (
    <TouchableHighlight
      style={{
        backgroundColor: '#d6d6d6',
        padding: 16,
        margin: 8,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'green',
        width: 200,
      }}
      onPress={sendForm}
    >
      <Text
        style={{
          fontWeight: 'bold',
          color: colors.grey20,
          fontSize: 14,
          textAlign: 'center',
        }}
      >
        Enviar Produto
      </Text>
    </TouchableHighlight>
  )
}

export default SendFormButtonProduct

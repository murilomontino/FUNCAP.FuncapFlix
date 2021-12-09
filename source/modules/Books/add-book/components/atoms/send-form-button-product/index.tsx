/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

import { TypeProduct, Category, TypeImgCapa } from '@/types/Products'

import { useLoading } from '@/context/LoadingModal'
import { useToast } from '@/context/ToastModal'

import {
  useFormProductGenero,
  useFormProductTags,
  useFormImage,
  useFormProductCategory,
  useFormProductCPFandCNPJ,
  useFormProductFinancialResources,
  useFormProductFile,
  useFormProductData,
} from '@/forms/Product/hooks'
import {
  useFormProductBook,
  useFormProductBookContent,
} from '@/forms/Product/product-book/hooks'

import api from '@/services'

import colors from '@/global/colors'

const SendFormButtonProduct = () => {
  const { tags } = useFormProductTags()
  const { genero } = useFormProductGenero()
  const { sobreAObra, sinopse, subTitle, title, isbn } = useFormProductBook()
  const { image } = useFormImage()
  const { file } = useFormProductFile()
  const { category, type } = useFormProductCategory()
  const { cpfOrCnpj, cpfOrCnpjIsValid } = useFormProductCPFandCNPJ()
  const { financialResources } = useFormProductFinancialResources()
  const { showLoading, hideLoading } = useLoading()
  const { culturalName, publishedDate } = useFormProductData()
  const { illustrated, publisher, size, illustrator, numberOfPages } =
    useFormProductBookContent()
  const { AlertToast } = useToast()

  const submitIsValid = useMemo(() => {
    if (
      financialResources &&
      title &&
      file !== null &&
      file.type === 'success' &&
      (cpfOrCnpj.length === 0 || (cpfOrCnpj.length > 0 && cpfOrCnpjIsValid))
    ) {
      switch (category) {
        case Category.Literature:
          return sinopse.length > 0
        case Category.Music:
          return true
        case Category.Video:
          return false
        default:
          return false
      }
    } else {
      return false
    }
  }, [sinopse, title, financialResources, file, cpfOrCnpj, cpfOrCnpjIsValid])

  const handleSubmit = async () => {
    showLoading()

    const { status, data } = await send({
      recursos: financialResources,
      isbn: isbn,
      numero_de_paginas: numberOfPages,
      tamanho: size,
      ilustracao: illustrated,
      editora: publisher,
      nome_cultural: culturalName,
      data_de_publicacao: publishedDate,
      link: '',
      cpfOrCnpj: cpfOrCnpj,
      tipo: type,
      nome_arquivo: file.name,
      genero: genero,
      tags: tags,
      sobre_a_obra: sobreAObra,
      sinopse: sinopse,
      categoria: category,
      sub_titulo: subTitle,
      titulo: title,
      arquivo: file.uri,
      capa: image.uri ?? undefined,
      tipo_capa: (image.mimeType as TypeImgCapa) ?? undefined,
    })

    switch (status) {
      case 200:
        AlertToast('success', 'Produto cadastrado com sucesso!')
        break

      default:
        AlertToast(
          'erro',
          `Erro ao cadastrar produto! Tente novamente. ${data}`
        )
        break
    }

    hideLoading()
  }

  const send = async (document: TypeProduct) => {
    try {
      const { data, status } = await api.post('add-product', document)
      return { data, status }
    } catch (error: any) {
      return error.response
    }
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableHighlight
        disabled={!submitIsValid}
        style={{
          backgroundColor: submitIsValid
            ? colors.button_secondary
            : colors.grey20,
          padding: 16,
          margin: 8,
          borderRadius: 40,

          width: 200,
        }}
        onPress={handleSubmit}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 14,
            textAlign: 'center',
          }}
        >
          Enviar Produto
        </Text>
      </TouchableHighlight>
    </View>
  )
}

export default SendFormButtonProduct

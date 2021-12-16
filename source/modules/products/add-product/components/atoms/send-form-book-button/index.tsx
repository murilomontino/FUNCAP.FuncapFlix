/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import { View } from 'react-native'

import { Category, TypeImgCapa, ProductBook } from '@/types/Products'

import { useLoading } from '@/context/LoadingModal'
import { useToast } from '@/context/ToastModal'

import Button from '@/components/atom/button'

import {
  useFormProductGenero,
  useFormProductTags,
  useFormImage,
  useFormProductCategory,
  useFormProductCPFandCNPJ,
  useFormProductFinancialResources,
  useFormProductData,
} from '@/forms/Product/hooks'
import {
  useFormBookFile,
  useFormProductBook,
  useFormProductBookContent,
} from '@/forms/Product/product-book/hooks'

import api from '@/services'

const SendFormBookButton = () => {
  const { tags } = useFormProductTags()
  const { genero } = useFormProductGenero()
  const { sobreAObra, sinopse, subTitle, title, isbn } = useFormProductBook()
  const { image } = useFormImage()
  const { file } = useFormBookFile()
  const { type } = useFormProductCategory()
  const { cpfOrCnpj, cpfOrCnpjIsValid } = useFormProductCPFandCNPJ()
  const { financialResources } = useFormProductFinancialResources()
  const { showLoading, hideLoading } = useLoading()
  const { culturalName, publishedDate } = useFormProductData()
  const { illustrated, publisher, size, illustrator, numberOfPages } =
    useFormProductBookContent()
  const { AlertToast } = useToast()

  const submitBookIsValid = useMemo(() => {
    if (
      financialResources &&
      title &&
      file !== null &&
      file.type === 'success' &&
      sinopse.length > 0 &&
      (cpfOrCnpj.length === 0 || (cpfOrCnpj.length > 0 && cpfOrCnpjIsValid))
    ) {
      return true
    }
    return false
  }, [sinopse, title, financialResources, file, cpfOrCnpj, cpfOrCnpjIsValid])

  const handleSubmit = async () => {
    showLoading()

    const { status, data } = await send({
      recursos: financialResources,
      isbn: isbn,
      numero_de_paginas: numberOfPages,
      tamanho: size,
      ilustrador: illustrator,
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
      categoria: Category.Literature,
      sub_titulo: subTitle,
      titulo: title,
      arquivo: file.uri,
      capa: image.uri ?? undefined,
      tipo_capa: (image.mimeType as TypeImgCapa) ?? undefined,
    })

    switch (status) {
      case 200:
        AlertToast('success', 'Livro Cadastrado Com Sucesso!')
        break

      default:
        AlertToast('erro', `Erro ao cadastrar livro! Tente novamente. ${data}`)
        break
    }

    hideLoading()
  }

  const send = async (document: ProductBook) => {
    try {
      const { data, status } = await api.post('add-book', document)
      return { data, status }
    } catch (error: any) {
      return error.response
    }
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Button
        disabled={!submitBookIsValid}
        onPress={handleSubmit}
        text="Enviar Livro"
      />
    </View>
  )
}

export default SendFormBookButton

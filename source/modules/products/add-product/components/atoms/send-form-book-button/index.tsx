/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import { View } from 'react-native'

import { Category, TypeImgCapa, ProductBook } from '@/types'

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
  useResetProducts,
} from '@/forms/Product/hooks'
import {
  useFormBookFile,
  useFormProductBook,
  useFormProductBookContent,
} from '@/forms/Product/product-book/hooks'

import api from '@/services'

const SendFormBookButton = () => {
  // fields ---------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  const { tags } = useFormProductTags()
  const { genero } = useFormProductGenero()
  const { sobreAObra, sinopse, subTitle, title, isbn } = useFormProductBook()
  const { image } = useFormImage()
  const { file } = useFormBookFile()
  const { type } = useFormProductCategory()
  const { cpfOrCnpj, cpfOrCnpjIsValid } = useFormProductCPFandCNPJ()
  const { financialResources } = useFormProductFinancialResources()
  const { culturalName, publishedDate } = useFormProductData()
  const { illustrated, publisher, size, illustrator, numberOfPages } =
    useFormProductBookContent()

  // Função com o objetivo de resetar o formulário de produtos
  const { reset } = useResetProducts()

  // -----------------------------------------------------------------------------
  // Efeito Visual ----------------------------------------------------------------
  const { AlertToast } = useToast()
  const { showLoading, hideLoading } = useLoading()

  // -----------------------------------------------------------------------------
  // Funções que enviam os dados do formulário -----------------------------------
  // -----------------------------------------------------------------------------

  const submitBookIsValid = useMemo(() => {
    const validateCPFOrCNPJ =
      cpfOrCnpj.length === 0 || (cpfOrCnpj.length > 0 && cpfOrCnpjIsValid)
    if (
      financialResources &&
      title &&
      file !== null &&
      file.type === 'success' &&
      sinopse.length > 0 &&
      validateCPFOrCNPJ
    ) {
      return true
    }
    return false
  }, [sinopse, title, financialResources, file, cpfOrCnpj, cpfOrCnpjIsValid])

  const handleSubmit = async () => {
    try {
      showLoading()

      const { status, data } = await send({
        autor: culturalName,
        recurso: financialResources,
        isbn: isbn,
        numero_de_paginas: numberOfPages as unknown as number,
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
        generos: genero,
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
          AlertToast(
            'erro',
            `Erro ao cadastrar livro! Tente novamente. ${data}`
          )
          break
      }

      hideLoading()
    } catch (error) {
      AlertToast('erro', `Erro ao cadastrar livro! Tente novamente. ${error}`)
    } finally {
      await reset()
    }
  }

  const send = async (document: ProductBook) => {
    try {
      const { data, status } = await api.post('books', document)
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

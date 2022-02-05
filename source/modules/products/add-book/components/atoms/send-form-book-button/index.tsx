/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import { View } from 'react-native'

import { Category, TypeImgCapa } from '@/types'
import { SettersBooks } from '@/types/generic'

import { useLoading } from '@/context/LoadingModal'
import { useToast } from '@/context/ToastModal'

import Button from '@/components/atom/button'

import {
  useFormBookGenero,
  useFormBookTags,
  useFormBookImage,
  useFormBookCategory,
  useFormBookCPFandCNPJ,
  useFormBookFinancialResources,
  useFormBookData,
  useResetBook,
  useFormBookFile,
  useFormBook,
  useFormBookContent,
} from '@/forms/Product/product-book/hooks'

import api from '@/services'

const SendFormBookButton = () => {
  // fields ---------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  const { tags } = useFormBookTags()
  const { genero } = useFormBookGenero()
  const { sobreAObra, sinopse, subTitle, title, isbn } = useFormBook()
  const { image } = useFormBookImage()
  const { file } = useFormBookFile()
  const { type } = useFormBookCategory()
  const { cpfOrCnpj, cpfOrCnpjIsValid } = useFormBookCPFandCNPJ()
  const { financialResources } = useFormBookFinancialResources()
  const { culturalName, publishedDate } = useFormBookData()
  const { illustrated, publisher, size, illustrator, numberOfPages } =
    useFormBookContent()

  // Função com o objetivo de resetar o formulário de produtos
  const { reset } = useResetBook()

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

  const send = async (document: SettersBooks) => {
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

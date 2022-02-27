/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import { View } from 'react-native'

import { Category, GetterBooks, TypeImgCapa } from '@/types/index'
import { SettersBooks } from '@/types/products/'

import { useLoading } from '@/context/LoadingModal'
import { useToast } from '@/context/ToastModal'

import Button from '@/components/atom/button'

import {
  useFormBookGenres,
  useFormBookTags,
  useFormBookThumbnail,
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
import { Getter } from '@/services/config/types'

const SendFormBookButton = () => {
  // fields ---------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  const { tags } = useFormBookTags()
  const { genres } = useFormBookGenres()
  const { sobreAObra, sinopse, subTitle, title, isbn } = useFormBook()
  const { thumbnail } = useFormBookThumbnail()
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
    const validateCPFOrCNPJ = cpfOrCnpj.length > 0 && cpfOrCnpjIsValid
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
        arquivo: file.uri,
        generos: genres,
        tags: tags,
        sobre_a_obra: sobreAObra,
        sinopse: sinopse,
        categoria: Category.Literature,
        sub_titulo: subTitle,
        titulo: title,
        capa: thumbnail?.uri ?? undefined,
        tipo_capa: (thumbnail?.mimeType as TypeImgCapa) ?? undefined,
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
    } catch (error) {
      AlertToast('erro', `Erro ao cadastrar livro! Tente novamente. ${error}`)
    } finally {
      await reset()
      hideLoading()
    }
  }

  const send = async (document: SettersBooks) => {
    const { data } = await api.post<Getter<GetterBooks>>('books', document)

    if (data.statusCode === 200) {
      return { data: data.data, status: data.statusCode }
    }

    return { data: data.error, status: data.statusCode }
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

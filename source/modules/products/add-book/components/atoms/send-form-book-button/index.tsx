/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'

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
  const { publisher, size, illustrator, numberOfPages } = useFormBookContent()

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

    const validateTitle = title.trim().length > 0
    const validateSinopse = sinopse.trim().length > 0

    if (
      financialResources &&
      validateTitle &&
      file !== null &&
      file.type === 'success' &&
      validateSinopse &&
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
        autor: culturalName.trim(),
        recurso: financialResources,
        isbn: isbn,
        numero_de_paginas: numberOfPages as unknown as number,
        tamanho: size,
        ilustrador: illustrator?.trim(),
        ilustracao: illustrator?.trim().length > 0,
        editora: publisher?.trim(),
        nome_cultural: culturalName?.trim(),
        data_de_publicacao: publishedDate?.trim(),
        cpfOrCnpj: cpfOrCnpj,
        tipo: type,
        nome_arquivo: file.name,
        arquivo: file.uri,
        generos: genres,
        tags: tags,
        sobre_a_obra: sobreAObra?.trim(),
        sinopse: sinopse?.trim(),
        categoria: Category.Literature,
        sub_titulo: subTitle?.trim(),
        titulo: title?.trim(),
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
    <Button
      disabled={!submitBookIsValid}
      onPress={handleSubmit}
      text="Enviar Livro"
    />
  )
}

export default SendFormBookButton

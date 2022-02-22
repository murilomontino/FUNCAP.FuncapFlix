/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { View } from 'react-native'

import { Category, TypeImgCapa } from '@/types/index'
import { SettersExhibitions } from '@/types/products/'

import { useLoading } from '@/context/LoadingModal'
import { useToast } from '@/context/ToastModal'

import Button from '@/components/atom/button'

import {
  useFormExhibitionGeneros,
  useFormExhibitionTags,
  useFormExhibitionImage,
  useFormExhibitionCPFandCNPJ,
  useFormExhibitionFinancialResources,
  useFormExhibitionData,
  useFormExhibitionFiles,
  useFormExhibitionEndDate,
  useFormExhibitionLocation,
  useFormExhibitionStartDate,
  useFormExhibitionTitle,
  useFormExhibitionDescription,
  useFormExhibitionReset,
} from '@/forms/Product/product-exhibition/hooks'

import api from '@/services'

const SendFormExhibitionButton = () => {
  // fields ---------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  const { tags } = useFormExhibitionTags()
  const { genero } = useFormExhibitionGeneros()
  const { endDate } = useFormExhibitionEndDate()
  const { startDate } = useFormExhibitionStartDate()
  const { title } = useFormExhibitionTitle()
  const { location } = useFormExhibitionLocation()
  const { description } = useFormExhibitionDescription()
  const { image } = useFormExhibitionImage()
  const { mapFiles } = useFormExhibitionFiles()
  const { cpfOrCnpj, cpfOrCnpjIsValid } = useFormExhibitionCPFandCNPJ()
  const { financialResources } = useFormExhibitionFinancialResources()
  const { culturalName } = useFormExhibitionData()

  // Função com o objetivo de resetar o formulário de produtos
  const { reset } = useFormExhibitionReset()
  // -----------------------------------------------------------------------------
  // Efeito Visual ----------------------------------------------------------------
  const { AlertToast } = useToast()
  const { showLoading, hideLoading } = useLoading()

  // -----------------------------------------------------------------------------
  // Funções que enviam os dados do formulário -----------------------------------
  // -----------------------------------------------------------------------------

  const handleSubmit = async () => {
    try {
      showLoading()

      const { status, data } = await send({
        artista: culturalName,
        categoria: Category.Exhibition,
        cpfOrCnpj,
        tags,
        generos: genero,
        sobre_a_obra: description,
        data_de_fim: endDate,
        data_de_inicio: startDate,
        titulo: title,
        local: location,
        recurso: financialResources,
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
            `Erro ao cadastrar Exposição! Tente novamente. ${data}`
          )
          break
      }

      hideLoading()
    } catch (error) {
      AlertToast(
        'erro',
        `Erro ao cadastrar Exposição! Tente novamente. ${error.message}`
      )
    } finally {
      // await reset()
    }
  }

  const send = async (document: SettersExhibitions) => {
    console.log(document)

    try {
      const { data, status } = await api.post('exhibitions', document)
      return { data, status }
    } catch (error: any) {
      return error.response
    }
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Button disabled={false} onPress={handleSubmit} text="Enviar Exposição" />
    </View>
  )
}

export default SendFormExhibitionButton

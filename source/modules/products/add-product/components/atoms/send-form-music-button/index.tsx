/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import { View } from 'react-native'

import { Category, TypeImgCapa, ProductMusic } from '@/types/Products'

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
  useFormMusic,
  useFormMusicsFile,
} from '@/forms/Product/product-music/hooks'

import api from '@/services'

const SendFormBookButton = () => {
  const { tags } = useFormProductTags()
  const { genero } = useFormProductGenero()
  const { image } = useFormImage()
  const { type } = useFormProductCategory()
  const { cpfOrCnpj, cpfOrCnpjIsValid } = useFormProductCPFandCNPJ()
  const { financialResources } = useFormProductFinancialResources()
  const { showLoading, hideLoading } = useLoading()
  const { culturalName, publishedDate } = useFormProductData()
  const { file } = useFormMusicsFile()
  const { titleMusic } = useFormMusic()
  const { AlertToast } = useToast()

  const submitBookIsValid = useMemo(() => {
    if (
      financialResources &&
      titleMusic &&
      file !== null &&
      file.type === 'success' &&
      (cpfOrCnpj.length === 0 || (cpfOrCnpj.length > 0 && cpfOrCnpjIsValid))
    ) {
      return true
    }
    return false
  }, [financialResources, file, cpfOrCnpj, cpfOrCnpjIsValid])

  const handleSubmit = async () => {
    showLoading()

    const { status, data } = await send({
      recursos: financialResources,
      nome_cultural: culturalName,
      data_de_publicacao: publishedDate,
      link: '',
      cpfOrCnpj: cpfOrCnpj,
      tipo: type,
      nome_arquivo: file.name,
      genero: genero,
      tags: tags,
      categoria: Category.Music,
      arquivo: file.uri,
      capa: image.uri ?? undefined,
      tipo_capa: (image.mimeType as TypeImgCapa) ?? undefined,
      titulo: titleMusic[0],
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

  const send = async (document: ProductMusic) => {
    try {
      const { data, status } = await api.post('add-product', document)
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
        text="Enviar Música(s)"
      />
    </View>
  )
}

export default SendFormBookButton

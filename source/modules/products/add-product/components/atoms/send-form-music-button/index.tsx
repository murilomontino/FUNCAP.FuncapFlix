/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import { View } from 'react-native'

import { Category, ProductMusic, TypeImgCapa } from '@/types/Products'

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

import io from '@/services/config/socket'

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
    const validateCPFOrCNPJ =
      cpfOrCnpj.length === 0 || (cpfOrCnpj.length > 0 && cpfOrCnpjIsValid)

    if (
      financialResources &&
      titleMusic &&
      file !== null &&
      file.length > 0 &&
      validateCPFOrCNPJ
    ) {
      return true
    }
    return false
  }, [financialResources, file, cpfOrCnpj, cpfOrCnpjIsValid])

  const handleSubmit = async () => {
    showLoading()

    file.forEach(async (document, index) => {
      const music: ProductMusic = {
        titulo: titleMusic[index],
        arquivo: document.uri,
        categoria: Category.Music,
        tags,
        genero,
        data_de_publicacao: publishedDate,
        capa: image.uri ?? '',
        tipo_capa: (image.mimeType as TypeImgCapa) ?? '',
        tipo: type,
        cpfOrCnpj: cpfOrCnpj,
        recursos: financialResources,
        nome_cultural: culturalName,
        nome_arquivo: document.name,
      }

      io.emit('add-music', music)
    })

    switch (200) {
      case 200:
        AlertToast('success', 'Livro Cadastrado Com Sucesso!')
        break

      default:
        AlertToast('erro', `Erro ao cadastrar livro! Tente novamente`)
        break
    }

    hideLoading()
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Button
        disabled={submitBookIsValid}
        onPress={handleSubmit}
        text="Enviar Música(s)"
      />
    </View>
  )
}

export default SendFormBookButton

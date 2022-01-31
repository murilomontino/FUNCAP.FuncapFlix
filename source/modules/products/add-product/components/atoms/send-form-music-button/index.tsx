/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from 'react'
import { View } from 'react-native'

import { Category, ProductAlbum, ProductMusic, TypeImgCapa } from '@/types'

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
  useFormMusicContent,
  useFormMusicsFile,
} from '@/forms/Product/product-music/hooks'

import api from '@/services'

const SendFormBookButton = () => {
  const { tags } = useFormProductTags()
  const { genero } = useFormProductGenero()
  const { image } = useFormImage()
  const { type } = useFormProductCategory()
  const { content } = useFormMusicContent()
  const { cpfOrCnpj, cpfOrCnpjIsValid } = useFormProductCPFandCNPJ()
  const { financialResources } = useFormProductFinancialResources()
  const { showLoading, hideLoading } = useLoading()
  const { culturalName, publishedDate } = useFormProductData()
  const { file } = useFormMusicsFile()
  const { titleMusics, titleAlbum } = useFormMusic()
  const { AlertToast } = useToast()

  const [album, setAlbum] = useState({
    produtoID: 13,
    albumID: 2,
    name_uuid: 'f39f34b6f24dee5db31240',
  })

  const submitMusicIsValid = useMemo(() => {
    const validateCPFOrCNPJ =
      cpfOrCnpj.length === 0 || (cpfOrCnpj.length > 0 && cpfOrCnpjIsValid)

    if (
      financialResources &&
      titleMusics &&
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

    const album: ProductAlbum = {
      cpfOrCnpj: cpfOrCnpj,
      arquivo: '',
      nome_arquivo: '',
      nome_cultural: culturalName,
      data_de_publicacao: publishedDate,
      tipo: type,
      categoria: Category.Music,
      generos: genero,
      recurso: financialResources,
      tipo_de_album: content,
      titulo: titleAlbum,
      capa: image.uri ?? '',
      tipo_capa: (image.mimeType as TypeImgCapa) ?? undefined,
      tags: tags,
    }

    const { data, status } = await api.post<ProductAlbum>(
      '/musicas/album',
      album
    )
    setAlbum({
      produtoID: data.productId,
      albumID: data.albumId,
      name_uuid: data.nome_unico,
    })

    switch (status) {
      case 200:
        AlertToast('success', 'Música(s) Cadastrada(s) Com Sucesso!')
        break

      default:
        AlertToast('erro', `Erro ao cadastrar música(s)! Tente novamente`)
        break
    }

    hideLoading()
  }

  const handleSubmitMusic = () => {
    file.forEach(async (document, index) => {
      const music: ProductMusic = {
        productId: 13, //
        nome_album: 'f39f34b6f24dee5db31240', //
        albumId: 2, //
        titulo: titleMusics[index],
        arquivo: document.uri,
        categoria: Category.Music,
        tags,
        generos: genero,
        data_de_publicacao: publishedDate,
        tipo: type,
        recurso: financialResources,
        nome_cultural: culturalName,
        nome_arquivo: document.name,
        duracao: '',
        compositor: '',
      }

      const response = await api.post<ProductMusic>('/musicas/musica', music)
      console.log(response)
    })
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Button
        disabled={!submitMusicIsValid}
        onPress={handleSubmit}
        text="Enviar Música(s)"
      />
      <Button
        disabled={false}
        onPress={handleSubmitMusic}
        text="Enviar Música(s) - Teste"
      />
    </View>
  )
}

export default SendFormBookButton

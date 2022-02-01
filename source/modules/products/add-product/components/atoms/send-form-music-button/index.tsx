/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
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
  useResetProducts,
} from '@/forms/Product/hooks'
import {
  useFormMusic,
  useFormMusicContent,
  useFormMusicDurations,
  useFormMusicsFile,
} from '@/forms/Product/product-music/hooks'

import api from '@/services'

const SendFormBookButton = () => {
  // Contexts and Hooks ------------------------------------------------------------
  const { tags } = useFormProductTags()
  const { genero } = useFormProductGenero()
  const { image } = useFormImage()
  const { type } = useFormProductCategory()
  const { content } = useFormMusicContent()
  const { cpfOrCnpj, cpfOrCnpjIsValid } = useFormProductCPFandCNPJ()
  const { financialResources } = useFormProductFinancialResources()
  const { culturalName, publishedDate } = useFormProductData()
  const { file } = useFormMusicsFile()
  const { durations } = useFormMusicDurations()
  const { titleMusics, titleAlbum } = useFormMusic()
  const { reset } = useResetProducts()
  // -----------------------------------------------------------------------------
  // Efeito Visual ---------------------------------------------------------------
  // -----------------------------------------------------------------------------
  const { AlertToast } = useToast()
  const { showLoading, hideLoading } = useLoading()

  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  // Variáveis que indicam se o formulário obteve sucesso ou falha
  // caso o formulário tenha ocorrido erro em alguma música, errFile terá o nome da música
  const sucessFile: string[] = []
  const errFile: string[] = []

  // Condicional para verificar se o usuário selecionou algum arquivo, e tenha informado:
  // o título do álbum e o nome da música, cpf / cnpj, recursos financeiros, data de publicação
  // Caso não tenha sido informado, o botão não será habilitado
  // o cpf/cnpj ta sendo validado no useFormProductCPFandCNPJ
  const submitMusicIsValid = useMemo(() => {
    const validateCPFOrCNPJ =
      cpfOrCnpj.length === 0 || (cpfOrCnpj.length > 0 && cpfOrCnpjIsValid)

    if (
      financialResources &&
      titleAlbum &&
      titleMusics &&
      file !== null &&
      file.length > 0 &&
      validateCPFOrCNPJ
    ) {
      return true
    }
    return false
  }, [financialResources, file, cpfOrCnpj, cpfOrCnpjIsValid, titleAlbum])

  // Funções para enviar os dados do formulário de música
  // Caso o formulário seja válido, será enviado os dados para a API /musicas/musica
  // Caso o formulário apresente erro, será exibido um toast com a mensagem:
  // de erro e o nome dos respectivos arquivos com erro
  // Caso o formulário seja válido, será exibido um toast com a mensagem de sucesso
  // e será feito um reload da página
  const sendFiles = async (music: ProductMusic) => {
    const { status } = await api.post<ProductMusic>('/musicas/musica', music)

    if (status === 200) {
      sucessFile.push(music.titulo)
    } else {
      errFile.push(music.titulo)
    }
  }

  const handleSubmit = async () => {
    try {
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

      switch (status) {
        case 200:
          file.forEach(async (document, index) => {
            const music: ProductMusic = {
              productId: data.productId, //
              nome_album: data.nome_unico, //
              albumId: data.albumId, //
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
              duracao: durations[index],
              compositor: '',
            }

            await sendFiles(music)
          })

          if (errFile.length > 0) {
            AlertToast(
              'erro',
              `Erro ao enviar os arquivos ${errFile.toString()}`
            )
          }
          AlertToast('success', 'Música(s) Cadastrada(s) Com Sucesso!')
          reset()
          break

        default:
          AlertToast('erro', `Erro ao cadastrar música(s)! Tente novamente`)
          break
      }
    } catch (error) {
      AlertToast('erro', `Erro ao cadastrar música(s)! Tente novamente`)
    } finally {
      hideLoading()
    }
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Button
        disabled={!submitMusicIsValid}
        onPress={handleSubmit}
        text="Enviar Música(s)"
      />
    </View>
  )
}

export default SendFormBookButton

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'

import { Category, GettersTracks, TypeImgCapa } from '@/types'
import { SettersTracks, SettersAlbums, GettersAlbums } from '@/types/products'

import { useLoading } from '@/context/LoadingModal'
import { useToast } from '@/context/ToastModal'

import Button from '@/components/atom/button'

import {
  useFormMusicGenero,
  useFormMusicTags,
  useFormMusicImage,
  useFormMusicCategory,
  useFormMusicCPFandCNPJ,
  useFormMusicFinancialResources,
  useFormMusicData,
  useResetMusic,
  useFormMusic,
  useFormMusicContent,
  useFormMusicsFile,
} from '@/forms/Product/product-music/hooks'

import api from '@/services'
import { Getter } from '@/services/config/types'

const SendFormMusicButton = () => {
  // Contexts and Hooks ------------------------------------------------------------
  const { tags } = useFormMusicTags()
  const { genero } = useFormMusicGenero()
  const { image } = useFormMusicImage()
  const { type } = useFormMusicCategory()
  const { content } = useFormMusicContent()
  const { cpfOrCnpj, cpfOrCnpjIsValid } = useFormMusicCPFandCNPJ()
  const { financialResources } = useFormMusicFinancialResources()
  const { culturalName, publishedDate } = useFormMusicData()
  const { mapFiles } = useFormMusicsFile()
  const { titleAlbum } = useFormMusic()
  const { reset } = useResetMusic()
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
  const successFile: string[] = []
  const errFile: string[] = []

  // Condicional para verificar se o usuário selecionou algum arquivo, e tenha informado:
  // o título do álbum e o nome da música, cpf / cnpj, recursos financeiros, data de publicação
  // Caso não tenha sido informado, o botão não será habilitado
  // o cpf/cnpj ta sendo validado no useFormMusicCPFandCNPJ
  const submitMusicIsValid = useMemo(() => {
    const validateCPFOrCNPJ = cpfOrCnpj.length > 0 && cpfOrCnpjIsValid

    const validateTitleAlbum = mapFiles
      ?.map((item) => {
        const titulo = item.get('titulo')

        if (titulo?.length > 0 && titulo?.trim()) {
          return true
        }

        return false
      })
      .reduce((acc, curr) => acc && curr, true)

    if (
      financialResources &&
      titleAlbum &&
      validateTitleAlbum &&
      mapFiles !== null &&
      content &&
      mapFiles.length > 0 &&
      validateCPFOrCNPJ
    ) {
      return true
    }
    return false
  }, [
    financialResources,
    mapFiles,
    cpfOrCnpj,
    content,
    cpfOrCnpjIsValid,
    titleAlbum,
    content,
  ])

  // Funções para enviar os dados do formulário de música
  // Caso o formulário seja válido, será enviado os dados para a API /musicas/musica
  // Caso o formulário apresente erro, será exibido um toast com a mensagem:
  // de erro e o nome dos respectivos arquivos com erro
  // Caso o formulário seja válido, será exibido um toast com a mensagem de sucesso
  // e será feito um reload da página
  const sendFiles = async (music: SettersTracks) => {
    const { data: track } = await api.post<Getter<GettersTracks>>(
      '/musicas/musica',
      music
    )

    if (track.statusCode === 200) {
      successFile.push(music.titulo)
    } else {
      errFile.push(music.titulo)
    }
  }

  const handleSubmit = async () => {
    try {
      showLoading()

      const albumDoc: SettersAlbums = {
        cpfOrCnpj: cpfOrCnpj,
        nome_cultural: culturalName,
        data_de_publicacao: publishedDate,
        tipo: type,
        categoria: Category.Music,
        generos: genero,
        recurso: financialResources,
        tipo_de_album: content,
        nome: titleAlbum,
        capa: image.uri ?? '',
        tipo_capa: (image.mimeType as TypeImgCapa) ?? undefined,
        tags: tags,
      }

      const { data: album } = await api.post<Getter<GettersAlbums>>(
        '/musicas/album',
        albumDoc
      )

      switch (album.statusCode) {
        case 200:
          mapFiles.forEach(async (document) => {
            const music: SettersTracks = {
              artista: culturalName,
              produtoId: album.data.produtoId, //
              nome_album: album.data.nome_unico, //
              albumId: album.data.id, //
              titulo: document.get('titulo'), //
              arquivo: document.get('uri'), //
              categoria: Category.Music,
              nome_arquivo: document.get('name'), //
              duracao: document.get('duracao'), //
              compositor: document.get('compositor'), //
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
    <Button
      disabled={!submitMusicIsValid}
      onPress={handleSubmit}
      text="Enviar Música(s)"
    />
  )
}

export default SendFormMusicButton

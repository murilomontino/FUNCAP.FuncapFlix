import React, { useCallback, useMemo } from 'react'

import { Category, ExhibitionPhotosTypes, TypeImgCapa } from '@/types'
import { createContext } from 'use-context-selector'

import { FormProductExhibition } from './type'

import { useAttrsExhibition } from '@/hooks/use-attrs-exhibition'
import { useAttrsExhibitionFiles } from '@/hooks/use-attrs-exhibition-files'
import { useAttrsProduct } from '@/hooks/use-attrs-product'
import { useSubmitExhibition } from '@/hooks/use-submit-exhibition'
import { useSubmitPhoto } from '@/hooks/use-submit-photos'

export const FormProductExhibitionContext = createContext(
  {} as FormProductExhibition
)

const FormProductExhibitionProvider: React.FC = ({ children }) => {
  // Fields Exhibitions
  const {
    biography,
    descriptionExhibition,
    endDate,
    location,
    photoOfArtist,
    startDate,
    titleExhibition,
    onChangeBiography,
    onChangeDescriptionExhibition,
    onChangeEndDate,
    onChangeLocation,
    onChangePhotoOfArtist,
    onChangeStartDate,
    onChangeTitleExhibition,
  } = useAttrsExhibition()

  // Fields Products
  const {
    tags,
    thumbnail,
    cpfOrCnpj,
    cpfOrCnpjIsValid,
    culturalName,
    financialResources,
    onChangeTags,
    onChangeThumbnail,
    onChangeCPForCNPJ,
    onChangeCPForCNPJIsValid,
    onChangeCulturalName,
    onChangeFinancialResources,
  } = useAttrsProduct()

  const {
    file,
    mapFiles,
    onChangeAttrPhotos,
    onChangeFile,
    onRemovePhoto,
    onChangeMapFiles,
  } = useAttrsExhibitionFiles()

  const { submit } = useSubmitExhibition()
  const { submit: submitPhoto } = useSubmitPhoto()

  const reset = useCallback(() => {
    onChangeDescriptionExhibition('')
    onChangeBiography('')
    onChangeEndDate('')
    onChangeLocation('')
    onChangePhotoOfArtist(null)
    onChangeStartDate('')
    onChangeTitleExhibition('')
    onChangeTags([])
    onChangeThumbnail(null)
    onChangeFile([])
    file.splice(0, file.length)
  }, [])

  const onSubmitPhoto = async ({
    exibicaoId,
    nome_exibicao,
    produtoId,
  }: {
    nome_exibicao: string
    exibicaoId: number
    produtoId: number
  }) => {
    return submitPhoto({
      artista: culturalName,
      arquivo: photoOfArtist.current?.uri,
      descricao: biography.current,
      nome_arquivo: photoOfArtist.current?.name,
      tipo_de_imagem: photoOfArtist.current?.mimeType,
      tipo_de_foto: ExhibitionPhotosTypes.foto_de_artista,
      titulo: culturalName,
      data: new Date().toISOString(),
      nome_exibicao: nome_exibicao,
      exibicaoId: exibicaoId,
      produtoId: produtoId,
    })
  }

  const onSubmit2 = async () => {
    return await submit({
      artista: culturalName,
      categoria: Category.Exhibition,
      cpfOrCnpj: cpfOrCnpj,
      tags: tags,
      generos: [],
      sobre_a_obra: descriptionExhibition,
      data_de_fim: endDate.current,
      data_de_inicio: startDate,
      titulo: titleExhibition,
      local: location.current,
      recurso: financialResources,
      capa: thumbnail.uri ?? undefined,
      tipo_capa: (thumbnail.mimeType as TypeImgCapa) ?? undefined,
    })
  }

  const onSubmit = async () => {
    const filesErr = await Promise.all(
      mapFiles.filter(async (file) => {
        const response = await submitPhoto({
          artista: culturalName,
          arquivo: file.get('uri'),
          descricao: file.get('descricao'),
          nome_arquivo: file.get('name'),
          tipo_de_imagem: file.get('mimeType'),
          tipo_de_foto: file.get(
            'tipo_de_foto'
          ) as unknown as ExhibitionPhotosTypes,
          titulo: file.get('titulo'),
          data: file.get('data'),
          nome_exibicao: '0025cc4d6223212f134a90',
          exibicaoId: 1,
          produtoId: 112,
        })

        if (response.statusCode !== 200) {
          file.set('error', 'true')
          return file
        }
      })
    )

    await onChangeMapFiles(filesErr)

    return { statusCode: 400 }
  }

  // Objeto tendo todos os validated que deram false, e o segundo é o boolean que representa se todos os fields foram validados
  const validated = useMemo(() => {
    const validateCpfOrCnpj = cpfOrCnpj.length > 0 && cpfOrCnpjIsValid

    const validateCulturalName = !!culturalName?.trim()

    const validateDescriptionExhibition = !!descriptionExhibition?.trim()

    const validateTitleExhibition = !!titleExhibition?.trim()

    const financialResourcesIsValid = !!financialResources

    const validateStartDate = !!startDate?.trim()

    const filterValid = [
      !validateCpfOrCnpj && 'CPF/CNPJ Inválido',
      !validateCulturalName && 'Nome artístico Não Preenchido',
      !validateDescriptionExhibition && 'Descrição Não Preenchida',
      !validateTitleExhibition && 'Título Não Preenchido',
      !validateStartDate && 'Data de início Não Pode ser vazia',
      !financialResourcesIsValid && 'Recursos financeiros Não Escolhido',
    ].filter((item) => item)

    const isValid = filterValid.length === 0

    return { err: filterValid, isValid }
  }, [
    cpfOrCnpj,
    cpfOrCnpjIsValid,
    culturalName,
    financialResources,
    descriptionExhibition,
    titleExhibition,
    startDate,
  ])

  return (
    <FormProductExhibitionContext.Provider
      value={{
        tags,
        thumbnail,
        cpfOrCnpj,
        cpfOrCnpjIsValid,
        culturalName,
        financialResources,
        mapFiles,
        location,
        biography,
        photoOfArtist,
        titleExhibition,
        onChangeMapFiles,
        onChangeCPForCNPJ,
        onChangeCPForCNPJIsValid,
        onChangeCulturalName,
        onChangeFinancialResources,
        onChangeDescriptionExhibition,
        onChangeStartDate,
        onChangeTitleExhibition,
        descriptionExhibition,
        endDate,
        startDate,
        onChangeThumbnail,
        file,
        onRemovePhoto,
        onChangeAttrPhotos,
        onChangeFile,
        reset,
        onSubmit,
        validated,
        onChangeTags,
        onChangeBiography,
        onChangeEndDate,
        onChangeLocation,
        onChangePhotoOfArtist,
      }}
    >
      {children}
    </FormProductExhibitionContext.Provider>
  )
}

export default FormProductExhibitionProvider

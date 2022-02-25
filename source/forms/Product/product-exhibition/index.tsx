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

  const { file, mapFiles, onChangeAttrPhotos, onChangeFile, onRemovePhoto } =
    useAttrsExhibitionFiles()

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

  const onSubmit = async () => {
    return submitPhoto({
      artista: culturalName,
      arquivo: photoOfArtist.current?.uri,
      descricao: biography.current,
      nome_arquivo: photoOfArtist.current?.name,
      tipo_de_imagem: photoOfArtist.current?.mimeType,
      tipo_de_foto: ExhibitionPhotosTypes.foto_de_artista,
      titulo: culturalName,
      data: null,
      nome_exibicao: '0025cc4d6223212f134a90',
      exibicaoId: 1,
      produtoId: 112,
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

  const validated = useMemo(() => {
    const validateCPFOrCNPJ =
      cpfOrCnpj.length === 0 || (cpfOrCnpj.length > 0 && cpfOrCnpjIsValid)

    if (
      financialResources &&
      titleExhibition.trim() &&
      culturalName.trim() &&
      descriptionExhibition.trim() &&
      startDate &&
      startDate.trim() &&
      validateCPFOrCNPJ
    ) {
      return true
    }
    return false
  }, [
    financialResources,
    cpfOrCnpj,
    cpfOrCnpjIsValid,
    titleExhibition,
    culturalName,
    descriptionExhibition,
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

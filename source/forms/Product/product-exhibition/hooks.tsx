import { useContextSelector } from 'use-context-selector'

import { FormProductExhibitionContext } from '.'

export const useFormExhibitionCPFandCNPJ = () => {
  const cpfOrCnpj = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.cpfOrCnpj
  )
  const onChangeCPForCNPJ = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeCPForCNPJ
  )
  const cpfOrCnpjIsValid = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.cpfOrCnpjIsValid
  )
  const onChangeCPForCNPJIsValid = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeCPForCNPJIsValid
  )
  return {
    cpfOrCnpj,
    onChangeCPForCNPJ,
    cpfOrCnpjIsValid,
    onChangeCPForCNPJIsValid,
  }
}

export const useFormExhibitionFinancialResources = () => {
  const financialResources = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.financialResources
  )
  const onChangeFinancialResources = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeFinancialResources
  )
  return {
    financialResources,
    onChangeFinancialResources,
  }
}

export const useFormExhibitionData = () => {
  const culturalName = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.culturalName
  )
  const onChangeCulturalName = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeCulturalName
  )

  return {
    culturalName,
    onChangeCulturalName,
  }
}

export const useFormExhibitionTags = () => {
  const tags = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.tags
  )
  const onChangeTags = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeTags
  )
  return {
    tags,
    onChangeTags,
  }
}

export const useFormExhibitionThumbnail = () => {
  const thumbnail = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.thumbnail
  )
  const onChangeThumbnail = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeThumbnail
  )
  return {
    thumbnail,
    onChangeThumbnail,
  }
}

export const useFormExhibitionStartDate = () => {
  const startDate = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.startDate
  )
  const onChangeStartDate = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeStartDate
  )
  return {
    startDate,
    onChangeStartDate,
  }
}

export const useFormExhibitionEndDate = () => {
  const endDate = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.endDate
  )
  const onChangeEndDate = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeEndDate
  )
  return {
    endDate,
    onChangeEndDate,
  }
}

export const useFormExhibitionDescription = () => {
  const description = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.descriptionExhibition
  )
  const onChangeDescription = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeDescriptionExhibition
  )
  return {
    description,
    onChangeDescription,
  }
}

export const useFormExhibitionFiles = () => {
  const mapFiles = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.mapFiles
  )
  const onChangeFiles = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeFile
  )

  const files = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.file
  )

  return {
    files,
    mapFiles,
    onChangeFiles,
  }
}

export const useFormExhibitionReset = () => {
  const reset = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.reset
  )
  return {
    reset,
  }
}

export const useFormExhibitionPhotoOfArtist = () => {
  const photoOfArtist = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.photoOfArtist
  )
  const onChangePhotoOfArtist = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangePhotoOfArtist
  )
  return {
    photoOfArtist,
    onChangePhotoOfArtist,
  }
}

export const useFormExhibitionBiography = () => {
  const biography = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.biography
  )
  const onChangeBiography = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeBiography
  )
  return {
    biography,
    onChangeBiography,
  }
}

export const useFormExhibitionTitle = () => {
  const title = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.titleExhibition
  )
  const onChangeTitle = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeTitleExhibition
  )
  return {
    title,
    onChangeTitle,
  }
}

export const useFormExhibitionLocation = () => {
  const location = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.location
  )
  const onChangeLocation = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeLocation
  )
  return {
    location,
    onChangeLocation,
  }
}

export const useFormExhibitionAttrsPhotos = () => {
  const onChangeAttrsPhotos = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onChangeAttrPhotos
  )
  return {
    onChangeAttrsPhotos,
  }
}

export const useFormExhibitionRemovePhoto = () => {
  const removePhoto = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onRemovePhoto
  )
  return {
    removePhoto,
  }
}

export const useSubmitFormExhibition = () => {
  const onSubmit = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.onSubmit
  )

  const reset = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.reset
  )

  const validated = useContextSelector(
    FormProductExhibitionContext,
    (value) => value.validated
  )

  return {
    onSubmit,
    reset,
    validated,
  }
}

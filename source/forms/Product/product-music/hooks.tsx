import { useContextSelector } from 'use-context-selector'

import { FormProductMusicContext } from './index'

export const useFormMusic = () => {
  const titleAlbum = useContextSelector(
    FormProductMusicContext,
    (state) => state.titleAlbum
  )
  const onChangeTitleAlbum = useContextSelector(
    FormProductMusicContext,
    (state) => state.onChangeTitleAlbum
  )

  const titleMusics = useContextSelector(
    FormProductMusicContext,
    (value) => value.titleMusics
  )
  const onChangeTitleMusics = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeTitleMusics
  )
  return {
    titleAlbum,
    titleMusics,
    onChangeTitleMusics,
    onChangeTitleAlbum,
  }
}

export const useFormMusicsFile = () => {
  const file = useContextSelector(
    FormProductMusicContext,
    (value) => value.file
  )
  const onChangeFile = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeFile
  )
  return {
    file,
    onChangeFile,
  }
}

export const useFormMusicContent = () => {
  const content = useContextSelector(
    FormProductMusicContext,
    (value) => value.content
  )
  const onChangeContent = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeContent
  )
  return {
    content,
    onChangeContent,
  }
}

export const useFormMusicReset = () => {
  const resetProductMusic = useContextSelector(
    FormProductMusicContext,
    (value) => value.resetProductMusic
  )
  return {
    resetProductMusic,
  }
}

export const useFormMusicDurations = () => {
  const durations = useContextSelector(
    FormProductMusicContext,
    (value) => value.durations
  )
  const onChangeDurations = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeDurations
  )
  return {
    durations,
    onChangeDurations,
  }
}

export const useFormMusicComposers = () => {
  const composers = useContextSelector(
    FormProductMusicContext,
    (value) => value.composers
  )

  const onChangeComposers = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeComposers
  )
  return {
    composers,
    onChangeComposers,
  }
}

export const removeFormMusic = () => {
  const onRemoveMusic = useContextSelector(
    FormProductMusicContext,
    (value) => value.onRemoveMusic
  )
  return {
    onRemoveMusic,
  }
}

export const useFormMusicImage = () => {
  const image = useContextSelector(
    FormProductMusicContext,
    (value) => value.capa
  )

  const onChangeImageURL = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeImageURL
  )

  const onChangeImage = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeImage
  )

  return {
    onChangeImageURL,
    onChangeImage,
    image,
  }
}

export const useFormMusicTags = () => {
  const tags = useContextSelector(
    FormProductMusicContext,
    (value) => value.tags
  )
  const onChangeTags = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeTags
  )
  return {
    onChangeTags,
    tags,
  }
}

export const useFormMusicGenero = () => {
  const genero = useContextSelector(
    FormProductMusicContext,
    (value) => value.genero
  )
  const onChangeGeneros = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeGeneros
  )
  return {
    genero,
    onChangeGeneros,
  }
}

export const useFormMusicCategory = () => {
  const category = useContextSelector(
    FormProductMusicContext,
    (value) => value.category
  )
  const onChangeCategory = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeCategory
  )

  const type = useContextSelector(
    FormProductMusicContext,
    (value) => value.type
  )
  const onChangeType = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeType
  )

  return {
    category,
    onChangeCategory,
    type,
    onChangeType,
  }
}

export const useFormMusicCPFandCNPJ = () => {
  const cpfOrCnpj = useContextSelector(
    FormProductMusicContext,
    (value) => value.cpfOrCnpj
  )
  const onChangeCPForCNPJ = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeCPForCNPJ
  )
  const cpfOrCnpjIsValid = useContextSelector(
    FormProductMusicContext,
    (value) => value.cpfOrCnpjIsValid
  )
  const onChangeCPForCNPJIsValid = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeCPForCNPJIsValid
  )
  return {
    cpfOrCnpj,
    onChangeCPForCNPJ,
    cpfOrCnpjIsValid,
    onChangeCPForCNPJIsValid,
  }
}

export const useFormMusicFinancialResources = () => {
  const financialResources = useContextSelector(
    FormProductMusicContext,
    (value) => value.financialResources
  )
  const onChangeFinancialResources = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeFinancialResources
  )
  return {
    financialResources,
    onChangeFinancialResources,
  }
}

export const useFormMusicData = () => {
  const culturalName = useContextSelector(
    FormProductMusicContext,
    (value) => value.culturalName
  )
  const onChangeCulturalName = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeCulturalName
  )

  const publishedDate = useContextSelector(
    FormProductMusicContext,
    (value) => value.publishedDate
  )
  const onChangePublishedDate = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangePublishedDate
  )

  return {
    culturalName,
    onChangeCulturalName,
    publishedDate,
    onChangePublishedDate,
  }
}

export const useResetMusic = () => {
  const resetMusic = useContextSelector(
    FormProductMusicContext,
    (value) => value.resetProductMusic
  )

  const reset = async () => {
    resetMusic()
  }

  return {
    reset,
  }
}

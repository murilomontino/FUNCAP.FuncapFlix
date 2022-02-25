import { useContextSelector } from 'use-context-selector'

import { FormProductBookContext } from './index'

export const useFormBook = () => {
  const sobreAObra = useContextSelector(
    FormProductBookContext,
    (value) => value.sobreAObra
  )
  const title = useContextSelector(
    FormProductBookContext,
    (value) => value.title
  )
  const subTitle = useContextSelector(
    FormProductBookContext,
    (value) => value.subTitle
  )

  const sinopse = useContextSelector(
    FormProductBookContext,
    (value) => value.sinopse
  )

  const isbn = useContextSelector(FormProductBookContext, (value) => value.isbn)

  const onChangeISBN = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeISBN
  )

  const onChangeSobreAObra = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeSobreAObra
  )
  const onChangeTitle = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeTitle
  )
  const onChangeSubTitle = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeSubTitle
  )
  const onChangeSinopse = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeSinopse
  )

  return {
    sobreAObra,
    title,
    subTitle,
    sinopse,
    isbn,
    onChangeISBN,
    onChangeSobreAObra,
    onChangeSubTitle,
    onChangeTitle,
    onChangeSinopse,
  }
}

export const useFormBookContent = () => {
  const publisher = useContextSelector(
    FormProductBookContext,
    (value) => value.publisher
  )
  const numberOfPages = useContextSelector(
    FormProductBookContext,
    (value) => value.numberOfPages
  )
  const size = useContextSelector(FormProductBookContext, (value) => value.size)
  const illustrator = useContextSelector(
    FormProductBookContext,
    (value) => value.illustrator
  )
  const illustrated = useContextSelector(
    FormProductBookContext,
    (value) => value.illustrated
  )

  const onChangePublisher = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangePublisher
  )

  const onChangeNumberOfPages = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeNumberOfPages
  )

  const onChangeSize = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeSize
  )

  const onChangeIllustrator = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeIllustrator
  )

  const onChangeIllustrated = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeIllustrated
  )

  return {
    publisher,
    numberOfPages,
    size,
    illustrator,
    illustrated,
    onChangePublisher,
    onChangeNumberOfPages,
    onChangeSize,
    onChangeIllustrator,
    onChangeIllustrated,
  }
}

export const useFormBookFile = () => {
  const file = useContextSelector(FormProductBookContext, (value) => value.file)
  const onChangeFile = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeFile
  )

  return {
    file,
    onChangeFile,
  }
}

export const useFormBookTags = () => {
  const tags = useContextSelector(FormProductBookContext, (value) => value.tags)
  const onChangeTags = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeTags
  )
  return {
    onChangeTags,
    tags,
  }
}

export const useFormBookGenres = () => {
  const genres = useContextSelector(
    FormProductBookContext,
    (value) => value.genres
  )
  const onChangeGenres = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeGenres
  )
  return {
    genres,
    onChangeGenres,
  }
}

export const useFormBookCategory = () => {
  const category = useContextSelector(
    FormProductBookContext,
    (value) => value.category
  )
  const onChangeCategory = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeCategory
  )

  const type = useContextSelector(FormProductBookContext, (value) => value.type)
  const onChangeType = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeType
  )

  return {
    category,
    onChangeCategory,
    type,
    onChangeType,
  }
}

export const useFormBookCPFandCNPJ = () => {
  const cpfOrCnpj = useContextSelector(
    FormProductBookContext,
    (value) => value.cpfOrCnpj
  )
  const onChangeCPForCNPJ = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeCPForCNPJ
  )
  const cpfOrCnpjIsValid = useContextSelector(
    FormProductBookContext,
    (value) => value.cpfOrCnpjIsValid
  )
  const onChangeCPForCNPJIsValid = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeCPForCNPJIsValid
  )
  return {
    cpfOrCnpj,
    onChangeCPForCNPJ,
    cpfOrCnpjIsValid,
    onChangeCPForCNPJIsValid,
  }
}

export const useFormBookFinancialResources = () => {
  const financialResources = useContextSelector(
    FormProductBookContext,
    (value) => value.financialResources
  )
  const onChangeFinancialResources = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeFinancialResources
  )
  return {
    financialResources,
    onChangeFinancialResources,
  }
}

export const useFormBookData = () => {
  const culturalName = useContextSelector(
    FormProductBookContext,
    (value) => value.culturalName
  )
  const onChangeCulturalName = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeCulturalName
  )

  const publishedDate = useContextSelector(
    FormProductBookContext,
    (value) => value.publishedDate
  )
  const onChangePublishedDate = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangePublishedDate
  )

  return {
    culturalName,
    onChangeCulturalName,
    publishedDate,
    onChangePublishedDate,
  }
}

export const useResetBook = () => {
  const resetBook = useContextSelector(
    FormProductBookContext,
    (value) => value.resetProductBook
  )

  const reset = async () => {
    resetBook()
  }

  return {
    reset,
  }
}

export const useFormBookThumbnail = () => {
  const thumbnail = useContextSelector(
    FormProductBookContext,
    (value) => value.thumbnail
  )

  const onChangeImageURL = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeImageURL
  )

  const onChangeThumbnail = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeThumbnail
  )

  return {
    onChangeImageURL,
    onChangeThumbnail,
    thumbnail,
  }
}

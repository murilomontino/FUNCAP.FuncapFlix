import { useContextSelector } from 'use-context-selector'

import { FormProductContext } from './index'

export const useFormImage = () => {
  const getImage = useContextSelector(
    FormProductContext,
    (value) => value.getImage
  )
  const image = useContextSelector(FormProductContext, (value) => value.capa)

  const onChangeImageURL = useContextSelector(
    FormProductContext,
    (value) => value.onChangeImageURL
  )

  return {
    getImage,
    onChangeImageURL,
    image,
  }
}

export const useFormProductTags = () => {
  const tags = useContextSelector(FormProductContext, (value) => value.tags)
  const onChangeTags = useContextSelector(
    FormProductContext,
    (value) => value.onChangeTags
  )
  return {
    onChangeTags,
    tags,
  }
}

export const useFormProductGenero = () => {
  const genero = useContextSelector(FormProductContext, (value) => value.genero)
  const onChangeGeneros = useContextSelector(
    FormProductContext,
    (value) => value.onChangeGeneros
  )
  return {
    genero,
    onChangeGeneros,
  }
}

export const useFormProductCategory = () => {
  const category = useContextSelector(
    FormProductContext,
    (value) => value.category
  )
  const onChangeCategory = useContextSelector(
    FormProductContext,
    (value) => value.onChangeCategory
  )

  const type = useContextSelector(FormProductContext, (value) => value.type)
  const onChangeType = useContextSelector(
    FormProductContext,
    (value) => value.onChangeType
  )

  return {
    category,
    onChangeCategory,
    type,
    onChangeType,
  }
}

export const useFormProductCPFandCNPJ = () => {
  const cpfOrCnpj = useContextSelector(
    FormProductContext,
    (value) => value.cpfOrCnpj
  )
  const onChangeCPForCNPJ = useContextSelector(
    FormProductContext,
    (value) => value.onChangeCPForCNPJ
  )
  const cpfOrCnpjIsValid = useContextSelector(
    FormProductContext,
    (value) => value.cpfOrCnpjIsValid
  )
  const onChangeCPForCNPJIsValid = useContextSelector(
    FormProductContext,
    (value) => value.onChangeCPForCNPJIsValid
  )
  return {
    cpfOrCnpj,
    onChangeCPForCNPJ,
    cpfOrCnpjIsValid,
    onChangeCPForCNPJIsValid,
  }
}

export const useFormProductFinancialResources = () => {
  const financialResources = useContextSelector(
    FormProductContext,
    (value) => value.financialResources
  )
  const onChangeFinancialResources = useContextSelector(
    FormProductContext,
    (value) => value.onChangeFinancialResources
  )
  return {
    financialResources,
    onChangeFinancialResources,
  }
}

export const useFormProductFile = () => {
  const file = useContextSelector(FormProductContext, (value) => value.file)
  const onChangeFile = useContextSelector(
    FormProductContext,
    (value) => value.onChangeFile
  )
  return {
    file,
    onChangeFile,
  }
}

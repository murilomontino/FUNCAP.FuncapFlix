import { useState, useCallback } from 'react'

import { FinancialResources } from '@/types'

import { Document } from '@/forms/Product/types'

export const useAttrsProduct = (): AttrsProduct => {
  const [cpfOrCnpj, setCPFOrCNPJ] = useState<string>('')
  const [cpfOrCnpjIsValid, setCPForCNPJIsValid] = useState(false)
  const [financialResources, setFinancialResources] =
    useState<FinancialResources>(0)
  const [culturalName, setCulturalName] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])
  const [genres, setGenres] = useState<string[]>([])
  const [thumbnail, setThumbnail] = useState<Document>()

  const onChangeTags = useCallback(
    (tags: string[]) => {
      setTags(tags)
    },
    [tags]
  )

  const onChangeGenres = useCallback(
    (genres: string[]) => {
      setGenres(genres)
    },
    [genres]
  )

  const onChangeThumbnail = useCallback(
    (thumbnail: Document) => {
      setThumbnail(thumbnail)
    },
    [thumbnail]
  )

  const onChangeCPForCNPJ = useCallback(
    (value: string) => {
      setCPFOrCNPJ(value)
    },
    [cpfOrCnpj]
  )

  const onChangeCPForCNPJIsValid = useCallback(
    (value: boolean) => {
      setCPForCNPJIsValid(value)
    },
    [cpfOrCnpjIsValid]
  )

  const onChangeFinancialResources = useCallback(
    (value: FinancialResources) => {
      setFinancialResources(value)
    },
    [financialResources]
  )

  const onChangeCulturalName = useCallback(
    (value: string) => {
      setCulturalName(value)
    },
    [culturalName]
  )

  return {
    cpfOrCnpj,
    cpfOrCnpjIsValid,
    financialResources,
    tags,
    thumbnail,
    culturalName,
    genres,
    onChangeFinancialResources,
    onChangeCPForCNPJIsValid,
    onChangeCPForCNPJ,
    onChangeCulturalName,
    onChangeGenres,
    onChangeTags,
    onChangeThumbnail,
  }
}

export interface AttrsProduct {
  cpfOrCnpj: string
  culturalName: string
  financialResources: FinancialResources
  thumbnail: Document
  genres: string[]
  tags: string[]
  cpfOrCnpjIsValid: boolean
  onChangeCulturalName: (value: string) => void
  onChangeFinancialResources: (value: FinancialResources) => void
  onChangeCPForCNPJ: (text: string) => void
  onChangeCPForCNPJIsValid: (value: boolean) => void
  onChangeThumbnail: (value: Document) => void
  onChangeTags: (tags: string[]) => void
  onChangeGenres: (generos: string[]) => void
}

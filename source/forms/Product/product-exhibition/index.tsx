import React, { useCallback, useState } from 'react'

import * as DocumentPicker from 'expo-document-picker'

import { Category, FinancialResources, TypesProducts } from '@/types'
import { createContext } from 'use-context-selector'

import { Document } from '../types'
import { FormProductExhibition, keys } from './type'

export const FormProductExhibitionContext = createContext(
  {} as FormProductExhibition
)

const FormProductExhibitionProvider: React.FC = ({ children }) => {
  const category = Category.Exhibition

  const [titleExhibition, setTitleExhibition] = useState('')
  const [descriptionExhibition, setDescriptionExhibition] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [location, setLocation] = useState('')
  const [photoOfArtist, setPhotoOfArtist] = useState({} as Document)
  const [biography, setBiography] = useState('')

  const [mapFiles, setMapFiles] = useState<Map<keys, string>[]>([])
  const file: Document[] = []

  // State -----------------------------------------------------------------------
  const [financialResources, setFinancialResources] = useState(0)
  const [genero, setGenero] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [capa, setCapa] = useState({} as Document)
  const [type, setType] = useState(TypesProducts.PHOTOS)
  const [cpfOrCnpj, SetCPForCNPJ] = useState('')
  const [cpfOrCnpjIsValid, SetCPForCNPJIsValid] = useState(false)
  const [culturalName, setCulturalName] = useState('')

  const onChangeLocation = useCallback(
    (value: string) => {
      setLocation(value)
    },
    [location]
  )

  const onChangePhotoOfArtist = useCallback(
    async (value: Document) => {
      setPhotoOfArtist(value)
    },
    [photoOfArtist]
  )

  const onChangeBiography = useCallback(
    (value: string) => {
      setBiography(value)
    },
    [biography]
  )

  const onChangeDescriptionExhibition = useCallback(
    (value: string) => {
      setDescriptionExhibition(value)
    },
    [descriptionExhibition]
  )

  const onChangeStartDate = useCallback(
    (value: string) => {
      setStartDate(value)
    },
    [startDate]
  )

  const onChangeEndDate = useCallback(
    (value: string) => {
      setEndDate(value)
    },
    [endDate]
  )

  const onChangeFile = useCallback(
    async (files) => {
      file.push(...files)
      const arrayMap = file.map((item) => {
        const map = new Map<keys, string>()
        Object.entries(item).forEach(([key, value]) => {
          map.set(key as keys, value)
        })
        map.set('descricao', '')
        map.set('data', '')
        map.set('tipo_de_foto', '')
        return map
      })

      setMapFiles([...mapFiles, ...arrayMap])
    },
    [file]
  )

  const onChangeAttrPhotos = useCallback(
    (value: string, index: number, key: keys) => {
      mapFiles[index].set(key, value)
      setMapFiles([...mapFiles])
    },
    [mapFiles]
  )

  const onRemovePhoto = useCallback(
    (index: number) => {
      mapFiles.splice(index, 1)
      file.splice(index, 1)
      setMapFiles([...mapFiles])
    },
    [mapFiles, file]
  )

  const onChangeTitleExhibition = useCallback(
    (value: string) => {
      setTitleExhibition(value)
    },
    [titleExhibition]
  )

  const onChangeCulturalName = useCallback(
    (value: string) => {
      setCulturalName(value)
    },
    [culturalName]
  )

  const onChangeImageURL = useCallback((value: string, title: string) => {
    setCapa({
      type: 'success',
      name: title,
      uri: value,
    } as Document)
  }, [])

  const onChangeFinancialResources = useCallback(
    (value: FinancialResources) => {
      setFinancialResources(value)
    },
    [financialResources]
  )

  const onChangeCPForCNPJ = useCallback(
    (text: string) => {
      SetCPForCNPJ(text)
    },
    [cpfOrCnpj]
  )

  const onChangeCPForCNPJIsValid = useCallback(
    (value: boolean) => {
      SetCPForCNPJIsValid(value)
    },
    [cpfOrCnpjIsValid]
  )
  const onChangeType = useCallback(
    (value: number) => {
      setType(value)
    },
    [type]
  )

  const onChangeImage = useCallback(
    async (image: DocumentPicker.DocumentResult) => {
      if (image.type === 'success') {
        setCapa(image)
      }
    },
    [capa]
  )

  const onChangeGeneros = useCallback(
    (generos: string[]) => {
      setGenero(generos)
    },
    [genero]
  )
  const onChangeTags = useCallback(
    (tags: string[]) => {
      setTags(tags)
    },
    [tags]
  )

  const resetProductExhibition = useCallback(() => {
    setTitleExhibition('')
    setMapFiles([])
    file.length = 0
    setFinancialResources(0)
    setGenero([])
    setTags([])
    setCapa({} as Document)
    SetCPForCNPJ('')
    SetCPForCNPJIsValid(false)
    setCulturalName('')
  }, [])

  return (
    <FormProductExhibitionContext.Provider
      value={{
        capa,
        category,
        cpfOrCnpj,
        cpfOrCnpjIsValid,
        culturalName,
        financialResources,
        genero,
        mapFiles,
        location,
        onChangeLocation,
        onChangeTitleExhibition,
        biography,
        onChangeBiography,
        onChangePhotoOfArtist,
        photoOfArtist,
        onRemovePhoto,
        titleExhibition,
        onChangeCPForCNPJ,
        onChangeCPForCNPJIsValid,
        onChangeCulturalName,
        onChangeFinancialResources,
        onChangeGeneros,
        onChangeImageURL,
        onChangeTags,
        onChangeType,
        onChangeImage,
        descriptionExhibition,
        endDate,
        onChangeDescriptionExhibition,
        onChangeEndDate,
        onChangeStartDate,
        startDate,
        tags,
        type,
        file,
        onChangeAttrPhotos,
        onChangeFile,
        resetProductExhibition,
      }}
    >
      {children}
    </FormProductExhibitionContext.Provider>
  )
}

export default FormProductExhibitionProvider

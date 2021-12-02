import React, { useCallback, useState } from 'react'

import * as DocumentPicker from 'expo-document-picker'

import { Category, FinancialResources, TypesProducts } from 'types/Products'
import { createContext, useContextSelector } from 'use-context-selector'

type Document = {
  type: 'success'
  name: string
  size?: number | undefined
  uri: string
  mimeType?: string | undefined
  lastModified?: number | undefined
  file?: any
  output?: any
}

type FormProduct = {
  title: string
  subTitle: string
  cpfOrCnpj: string
  financialResources: FinancialResources
  link: string
  capa: Document
  pdf: Document
  music: Document
  category: Category
  type: TypesProducts
  sinopse: string
  resumo: string
  genero: string[]
  tags: string[]
  cpfOrCnpjIsValid: boolean
  onChangeFinancialResources: (value: FinancialResources) => void
  onChangeCPForCNPJ: (text: string) => void
  onChangeCPForCNPJIsValid: (value: boolean) => void
  getMusic: () => Promise<boolean>
  getImage: () => Promise<boolean>
  getPDF: () => Promise<boolean>
  onChangeCategory: (value: Category) => void
  onChangeType: (value: TypesProducts) => void
  onChangeTitle: (text: string) => void
  onChangeSubTitle: (text: string) => void
  onChangeSinopse: (text: string) => void
  onChangeResumo: (text: string) => void
  onChangeTags: (tags: string[]) => void
  onChangeGeneros: (generos: string[]) => void
  onChangeLink: (text: string) => void
  resetForm: () => void
}

const FormProductContext = createContext({} as FormProduct)

const FormProductProvider: React.FC = ({ children }) => {
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [sinopse, setSinopse] = useState('')
  const [resumo, setResumo] = useState('')
  const [financialResources, setFinancialResources] = useState(0)
  const [genero, setGenero] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [capa, setCapa] = useState({} as Document)
  const [pdf, setPDF] = useState({} as Document)
  const [music, setMusic] = useState({} as Document)
  const [category, setCategory] = useState(0)
  const [type, setType] = useState(0)
  const [cpfOrCnpj, SetCPForCNPJ] = useState('')
  const [cpfOrCnpjIsValid, SetCPForCNPJIsValid] = useState(false)
  const [link, setLink] = useState('')

  const onChangeFinancialResources = useCallback(
    (value: FinancialResources) => {
      setFinancialResources(value)
    },
    [financialResources]
  )

  const onChangeLink = useCallback(
    (text: string) => {
      setLink(text)
    },
    [link]
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

  const onChangeCategory = useCallback(
    (value: Category) => {
      setCategory(value)

      switch (value) {
        case Category.Literature:
          resetForm(Category.Literature)
          setType(TypesProducts.PDF)

          break
        case Category.Music:
          resetForm(Category.Music)
          setType(TypesProducts.MP3)

          break
        case Category.Video:
          resetForm(Category.Video)
          setType(TypesProducts.URL)

          break
        default:
          break
      }
    },
    [category]
  )

  const onChangeType = useCallback(
    (value: number) => {
      setType(value)
    },
    [type]
  )

  const getImage = useCallback(async () => {
    const obj = await DocumentPicker.getDocumentAsync({
      type: ['image/png', 'image/jpeg'],
    })

    if (obj.type === 'success') {
      setCapa(obj)

      return true
    }

    return false
  }, [capa])

  const getMusic = useCallback(async () => {
    const document = await DocumentPicker.getDocumentAsync({
      type: ['audio/mp3'],
    })

    if (document.type === 'success') {
      setMusic(document)
      return true
    }
    return false
  }, [music])

  const getPDF = useCallback(async () => {
    const document = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    })

    if (document.type === 'success') {
      setPDF(document)
      return true
    }
    return false
  }, [pdf])

  const onChangeTitle = useCallback(
    (text: string) => {
      setTitle(text)
    },
    [title]
  )
  const onChangeSubTitle = useCallback(
    (text: string) => {
      setSubTitle(text)
    },
    [subTitle]
  )
  const onChangeResumo = useCallback(
    (text: string) => {
      setResumo(text)
    },
    [resumo]
  )

  const onChangeSinopse = useCallback(
    (text: string) => {
      setSinopse(text)
    },
    [sinopse]
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

  const resetForm = useCallback((category: Category = 0) => {
    setTitle('')
    setSubTitle('')
    setSinopse('')
    setResumo('')

    setGenero([])
    setTags([])
    setCapa({} as Document)
    setPDF({} as Document)
    setMusic({} as Document)

    SetCPForCNPJ('')
    SetCPForCNPJIsValid(false)
    setLink('')
  }, [])

  return (
    <FormProductContext.Provider
      value={{
        title,
        subTitle,
        sinopse,
        resumo,
        genero,
        tags,
        capa,
        pdf,
        category,
        type,
        music,
        cpfOrCnpj,
        cpfOrCnpjIsValid,
        link,
        financialResources,
        onChangeFinancialResources,
        onChangeLink,
        onChangeCPForCNPJ,
        onChangeCPForCNPJIsValid,
        onChangeCategory,
        onChangeType,
        getMusic,
        getImage,
        getPDF,
        onChangeTitle,
        onChangeGeneros,
        onChangeResumo,
        onChangeSinopse,
        onChangeSubTitle,
        onChangeTags,
        resetForm,
      }}
    >
      {children}
    </FormProductContext.Provider>
  )
}

export default FormProductProvider

export const useFormImage = () => {
  const getImage = useContextSelector(
    FormProductContext,
    (value) => value.getImage
  )
  const image = useContextSelector(FormProductContext, (value) => value.capa)

  return {
    getImage,
    image,
  }
}

export const useFormPDF = () => {
  const getPDF = useContextSelector(FormProductContext, (value) => value.getPDF)
  const pdf = useContextSelector(FormProductContext, (value) => value.pdf)
  return {
    getPDF,
    pdf,
  }
}

export const useFormProduct = () => {
  const resumo = useContextSelector(FormProductContext, (value) => value.resumo)
  const title = useContextSelector(FormProductContext, (value) => value.title)
  const subTitle = useContextSelector(
    FormProductContext,
    (value) => value.subTitle
  )

  const sinopse = useContextSelector(
    FormProductContext,
    (value) => value.sinopse
  )

  const onChangeResumo = useContextSelector(
    FormProductContext,
    (value) => value.onChangeResumo
  )
  const onChangeTitle = useContextSelector(
    FormProductContext,
    (value) => value.onChangeTitle
  )
  const onChangeSubTitle = useContextSelector(
    FormProductContext,
    (value) => value.onChangeSubTitle
  )
  const onChangeSinopse = useContextSelector(
    FormProductContext,
    (value) => value.onChangeSinopse
  )

  return {
    resumo,
    title,
    subTitle,
    sinopse,
    onChangeResumo,
    onChangeSubTitle,
    onChangeTitle,
    onChangeSinopse,
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

export const useFormMusic = () => {
  const getMusic = useContextSelector(
    FormProductContext,
    (value) => value.getMusic
  )
  const music = useContextSelector(FormProductContext, (value) => value.music)
  return {
    getMusic,
    music,
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

export const useFormProductLink = () => {
  const link = useContextSelector(FormProductContext, (value) => value.link)
  const onChangeLink = useContextSelector(
    FormProductContext,
    (value) => value.onChangeLink
  )
  return {
    link,
    onChangeLink,
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

export const useResetFormProduct = () => {
  const resetForm = useContextSelector(
    FormProductContext,
    (value) => value.resetForm
  )
  return {
    resetForm,
  }
}

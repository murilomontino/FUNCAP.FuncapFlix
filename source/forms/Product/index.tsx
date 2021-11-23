import React, { useCallback, useState } from 'react'

import * as DocumentPicker from 'expo-document-picker'

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
  capa: Document
  pdf: Document
  getImage: () => Promise<boolean>
  getPDF: () => Promise<boolean>
  sinopse: string
  resumo: string
  genero: string[]
  tags: string[]
  onChangeTitle: (text: string) => void
  onChangeSubTitle: (text: string) => void
  onChangeSinopse: (text: string) => void
  onChangeResumo: (text: string) => void
  onChangeTags: (tags: string[]) => void
  onChangeGeneros: (generos: string[]) => void
}

const FormProductContext = createContext({} as FormProduct)

const FormProductProvider: React.FC = ({ children }) => {
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [sinopse, setSinopse] = useState('')
  const [resumo, setResumo] = useState('')
  const [genero, setGenero] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [capa, setCapa] = useState({} as Document)
  const [pdf, setPDF] = useState({} as Document)

  const getImage = useCallback(async () => {
    const obj = await DocumentPicker.getDocumentAsync({
      type: ['image/png', 'image/jpeg'],
    })

    if (obj.type === 'success') {
      setCapa(obj)

      return true
    }

    return false
  }, [])

  const getPDF = useCallback(async () => {
    const document = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    })

    if (document.type === 'success') {
      setPDF(document)
      return true
    }
    return false
  }, [])

  const onChangeTitle = useCallback((text: string) => {
    setTitle(text)
  }, [])
  const onChangeSubTitle = useCallback((text: string) => {
    setSubTitle(text)
  }, [])
  const onChangeResumo = useCallback((text: string) => {
    setResumo(text)
  }, [])

  const onChangeSinopse = useCallback((text: string) => {
    setSinopse(text)
  }, [])
  const onChangeGeneros = useCallback((generos: string[]) => {
    setGenero(generos)
  }, [])
  const onChangeTags = useCallback((tags: string[]) => {
    setTags(tags)
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
        getImage,
        getPDF,
        onChangeTitle,
        onChangeGeneros,
        onChangeResumo,
        onChangeSinopse,
        onChangeSubTitle,
        onChangeTags,
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

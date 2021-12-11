import React, { useCallback, useEffect, useState } from 'react'

import { Category } from '@/types/Products'
import { createContext } from 'use-context-selector'

import { FormProductBook } from '../types'

export const FormProductBookContext = createContext({} as FormProductBook)

type Props = {
  category: Category
}

const FormProductBookProvider: React.FC<Props> = ({ children, category }) => {
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [sinopse, setSinopse] = useState('')
  const [sobreAObra, setSobreAObra] = useState('')
  const [isbn, setISBN] = useState('')
  const [numberOfPages, setNumberOfPages] = useState('')
  const [publisher, setPublisher] = useState('')
  const [size, setSize] = useState('')
  const [illustrated, setIllustrated] = useState(false)
  const [illustrator, setIlustrador] = useState('')

  useEffect(() => {
    return () => {
      resetProductBook()
    }
  }, [category])

  const onChangeIllustrator = useCallback(
    (text: string) => {
      setIlustrador(text)
    },
    [illustrator]
  )
  const onChangeNumberOfPages = useCallback(
    (text: string) => {
      setNumberOfPages(text)
    },
    [numberOfPages]
  )

  const onChangePublisher = useCallback(
    (text: string) => {
      setPublisher(text)
    },
    [publisher]
  )

  const onChangeSize = useCallback(
    (text: string) => {
      setSize(text)
    },
    [size]
  )

  const onChangeIllustrated = useCallback(
    (value: boolean) => {
      setIllustrated(value)
    },
    [illustrated]
  )

  const resetProductBook = useCallback(() => {
    setTitle('')
    setSubTitle('')
    setSinopse('')
    setSobreAObra('')
    setISBN('')
  }, [])

  const onChangeISBN = useCallback(
    (value: string) => {
      setISBN(value)
    },
    [isbn]
  )

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
  const onChangeSobreAObra = useCallback(
    (text: string) => {
      setSobreAObra(text)
    },
    [sobreAObra]
  )

  const onChangeSinopse = useCallback(
    (text: string) => {
      setSinopse(text)
    },
    [sinopse]
  )

  return (
    <FormProductBookContext.Provider
      value={{
        title,
        subTitle,
        sinopse,
        sobreAObra,
        isbn,
        illustrated,
        numberOfPages,
        publisher,
        size,
        illustrator,
        onChangeIllustrator,
        onChangeNumberOfPages,
        onChangePublisher,
        onChangeSize,
        onChangeIllustrated,
        onChangeISBN,
        onChangeTitle,
        onChangeSobreAObra,
        onChangeSinopse,
        onChangeSubTitle,
        resetProductBook,
      }}
    >
      {children}
    </FormProductBookContext.Provider>
  )
}

export default FormProductBookProvider

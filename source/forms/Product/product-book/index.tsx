import React, { useCallback, useState } from 'react'

import { createContext } from 'use-context-selector'

import { FormProductBook } from '../types'

export const FormProductBookContext = createContext({} as FormProductBook)

const FormProductBookProvider: React.FC = ({ children }) => {
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [sinopse, setSinopse] = useState('')
  const [sobreAObra, setSobreAObra] = useState('')
  const [isbn, setISBN] = useState('')

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

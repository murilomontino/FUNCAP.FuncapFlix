import React, { useCallback, useEffect, useState } from 'react'

import { Category } from '@/types/Products'
import { createContext } from 'use-context-selector'

import { FormProductMusic } from '../types'

export const FormProductMusicContext = createContext({} as FormProductMusic)

type Props = {
  category: Category
}

const FormProductMusicProvider: React.FC<Props> = ({ children, category }) => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    return () => {
      resetProductMusic()
    }
  }, [category])

  const onChangeTitle = useCallback(
    (text: string) => {
      setTitle(text)
    },
    [title]
  )

  const resetProductMusic = useCallback(() => {
    setTitle('')
  }, [])

  return (
    <FormProductMusicContext.Provider
      value={{
        title,
        onChangeTitle,
        resetProductMusic,
      }}
    >
      {children}
    </FormProductMusicContext.Provider>
  )
}

export default FormProductMusicProvider

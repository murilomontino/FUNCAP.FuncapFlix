import React, { useCallback, useState } from 'react'

import { createContext } from 'use-context-selector'

import { FormProductMusic } from '../types'

export const FormProductMusicContext = createContext({} as FormProductMusic)

const FormProductMusicProvider: React.FC = ({ children }) => {
  const [title, setTitle] = useState('')

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

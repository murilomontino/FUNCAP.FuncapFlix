import { useContextSelector } from 'use-context-selector'

import { FormProductMusicContext } from './index'

export const useFormMusic = () => {
  const titleMusic = useContextSelector(
    FormProductMusicContext,
    (value) => value.title
  )
  const onChangeTitleMusic = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeTitle
  )
  return {
    titleMusic,
    onChangeTitleMusic,
  }
}

export const useFormMusicsFile = () => {
  const file = useContextSelector(
    FormProductMusicContext,
    (value) => value.file
  )
  const onChangeFile = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeFile
  )
  return {
    file,
    onChangeFile,
  }
}

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

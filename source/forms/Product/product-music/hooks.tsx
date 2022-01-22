import { useContextSelector } from 'use-context-selector'

import { FormProductMusicContext } from './index'

export const useFormMusic = () => {
  const titleAlbum = useContextSelector(
    FormProductMusicContext,
    (state) => state.titleAlbum
  )
  const onChangeTitleAlbum = useContextSelector(
    FormProductMusicContext,
    (state) => state.onChangeTitleAlbum
  )

  const titleMusics = useContextSelector(
    FormProductMusicContext,
    (value) => value.titleMusics
  )
  const onChangeTitleMusics = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeTitleMusics
  )
  return {
    titleAlbum,
    titleMusics,
    onChangeTitleMusics,
    onChangeTitleAlbum,
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

export const useFormMusicContent = () => {
  const content = useContextSelector(
    FormProductMusicContext,
    (value) => value.content
  )
  const onChangeContent = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeContent
  )
  return {
    content,
    onChangeContent,
  }
}

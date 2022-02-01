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

export const useFormMusicReset = () => {
  const resetProductMusic = useContextSelector(
    FormProductMusicContext,
    (value) => value.resetProductMusic
  )
  return {
    resetProductMusic,
  }
}

export const useFormMusicDurations = () => {
  const durations = useContextSelector(
    FormProductMusicContext,
    (value) => value.durations
  )
  const onChangeDurations = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeDurations
  )
  return {
    durations,
    onChangeDurations,
  }
}

export const useFormMusicComposers = () => {
  const composers = useContextSelector(
    FormProductMusicContext,
    (value) => value.composers
  )

  const onChangeComposers = useContextSelector(
    FormProductMusicContext,
    (value) => value.onChangeComposers
  )
  return {
    composers,
    onChangeComposers,
  }
}

export const removeFormMusic = () => {
  const onRemoveMusic = useContextSelector(
    FormProductMusicContext,
    (value) => value.onRemoveMusic
  )
  return {
    onRemoveMusic,
  }
}

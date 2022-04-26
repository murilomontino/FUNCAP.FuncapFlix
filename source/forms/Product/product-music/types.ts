import { TypeMusicAlbums } from '@/types'

import { FormProduct } from '../types'

import { AttrsTracksFiles } from '@/hooks/use-attrs-tracks-files'

export type keys =
  | 'type'
  | 'name'
  | 'size'
  | 'mimeType'
  | 'uri'
  | 'duracao'
  | 'data'
  | 'titulo'
  | 'compositor'
  | 'id'
  | 'error'

export interface FormProductMusic
  extends Omit<AttrsTracksFiles, 'onChangeFile'>,
    FormProduct {
  titleAlbum: string
  content: TypeMusicAlbums
  onChangeTitleAlbum: (value: string) => void
  onChangeContent: (value: number) => void
  onChangeTitleMusics: (value: string, index: number) => void
  onChangeDurations: (value: string, index: number) => void
  resetProductMusic: () => void
  onRemoveMusic: (index: number) => void
  onChangeComposers: (value: string, index: number) => void
  onChangeFile: () => Promise<boolean>
}

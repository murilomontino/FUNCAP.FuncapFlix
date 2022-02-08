import { Category, TypeMusicAlbums } from '@/types'

import { SettersGenericProduct } from './products'

export interface SettersAlbums extends SettersGenericProduct {
  albumId?: number
  nome: string
  categoria: Category.Music
  tipo_de_album: TypeMusicAlbums
  nome_unico?: string
}

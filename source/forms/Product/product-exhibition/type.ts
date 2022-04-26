import { GettersExhibitions } from '@/types'

import { Getter } from '@/services/config/types'

import { Document, FormProduct } from '../types'

import { AttrsExhibition } from '@/hooks/use-attrs-exhibition'
import { AttrsExhibitionFiles } from '@/hooks/use-attrs-exhibition-files'

export type keys =
  | 'type'
  | 'name'
  | 'size'
  | 'mimeType'
  | 'uri'
  | 'tipo_de_foto'
  | 'descricao'
  | 'data'
  | 'titulo'
  | 'id'
  | 'error'

export type Generics = string | number | boolean | null

export type Argument =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | boolean[]
  | null
  | undefined
  | Document
export interface FormProductExhibition
  extends AttrsExhibition,
    AttrsExhibitionFiles,
    Omit<
      FormProduct,
      | 'publishedDate'
      | 'onChangePublishedDate'
      | 'type'
      | 'onChangeType'
      | 'genres'
      | 'onChangeGenres'
      | 'capa'
      | 'onChangeImage'
      | 'onChangeImageURL'
      | 'onChangeCategory'
      | 'resetProduct'
      | 'category'
    > {
  onSubmit: () => Promise<Getter<GettersExhibitions>>
  reset: () => void
  validated: {
    err: string[]
    isValid: boolean
  }
}

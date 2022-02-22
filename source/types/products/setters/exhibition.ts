import { Category } from '@/types'

import {
  exhibition,
  exhibitionPhotos,
  exhibitionWorks,
} from '../../models/exhibition'
import { SettersGenericProduct } from './products'

export interface SettersExhibitions
  extends Omit<SettersGenericProduct, 'nome_cultural'>,
    Omit<exhibition, 'produtoId' | 'id'> {
  categoria: Category.Exhibition
}

export interface SettersExhibitionsPhotos
  extends Omit<exhibitionPhotos, 'documentoId' | 'id'> {
  arquivo: string
  nome_arquivo: string
  nome_exibicao: string
  name_uuid: string
}

export interface SettersExhibitionsWorks
  extends Omit<exhibitionWorks, 'documentoId' | 'id'> {
  arquivo: string
  nome_arquivo: string
  nome_exibicao: string
  name_uuid: string
}

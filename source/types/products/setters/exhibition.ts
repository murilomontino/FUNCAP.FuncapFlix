import { Category } from '@/types'

import {
	exhibition,
	exhibitionPhotos,
	exhibitionWorks,
} from '../../models/exhibition'
import { SettersGenericProduct } from './products'

export interface SettersExhibitions
	extends Omit<
			SettersGenericProduct,
			'nome_cultural' | 'tipo' | 'arquivo' | 'nome_arquivo'
		>,
		Omit<exhibition, 'produtoId' | 'id' | 'nome_unico'> {
	nome_unico?: string
	categoria: Category.Exhibition
}

export interface SettersExhibitionsPhotos
	extends Omit<exhibitionPhotos, 'documentoId' | 'id'> {
	produtoId?: number
	arquivo: string
	tipo_de_imagem: string
	nome_arquivo: string
	nome_exibicao: string
	name_uuid: string
}

export interface SettersExhibitionsWorks
	extends Omit<exhibitionWorks, 'documentoId' | 'id'> {
	produtoId?: number
	arquivo: string
	tipo_de_imagem: string
	nome_arquivo: string
	nome_exibicao: string
	name_uuid: string
}

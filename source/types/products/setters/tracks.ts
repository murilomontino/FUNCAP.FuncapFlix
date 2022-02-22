import { Category } from '@/types'

export interface SettersTracks {
	produtoId: number
	name_uuid?: string
	artista: string
	titulo: string
	categoria: Category.Music
	duracao: string
	compositor: string
	albumId: number
	nome_album: string
	arquivo: string
	nome_arquivo: string
}

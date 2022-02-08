import {
	Category,
	FinancialResources,
	generos,
	musicsAlbums,
	products,
	tags,
	TypeMusicAlbums,
	TypesProducts,
} from '@/types'

import { tracks } from '../../models/musics'

export interface GettersAlbums extends musicsAlbums, products {
	id: number
	nome: string
	produtoId: number
	nome_unico: string
	tipo: TypeMusicAlbums
	artista: string
	data_de_lancamento: string
	image: string
	tracks: GettersTracks[]
	cpf: string
	cnpj: string
	categoria: Category
	recurso: FinancialResources
	patrocinadores: number
	fichaTecnica: number
	youtube: number
	sobre_a_obra: string
	link: string
	tags: string[] | tags[]
	generos: string[] | generos[]
	data_cadastro: Date
}

export interface GettersTracks extends tracks {
	id: number
	produtoId: number
	albumMusicalId: number
	documentoId: number
	tipo_de_arquivo: TypesProducts
	arquivo: string
	nome_arquivo: string
	titulo: string
	duracao: string
	compositor: string
	artista: string
}

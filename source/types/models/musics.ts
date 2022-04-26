export type musicsAlbums = {
	id?: number
	nome: string
	produtoId: number
	nome_unico: string
	tipo: TypeMusicAlbums
	artista: string
	data_de_lancamento: string
}

export type tracks = {
	id?: number
	albumMusicalId: number
	documentoId: number
	titulo: string
	duracao: string
	compositor: string
	artista: string
}

export enum TypeMusicAlbums {
	'single' = 1,
	'ep',
	'album_interprete',
	'album',
}

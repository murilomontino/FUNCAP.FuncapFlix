export type ProductsAttributes = {
	id: number
	id_artista: number
	titulo: string
	sub_titulo: string
	capa: string
	sinopse: string
	resumo: string
	genero: {
		[key: number]: string
	}
	tags: {
		[key: number]: string
	}
	categoria: number
	tipo: number
	link: string
	nome_arquivo: string
	arquivo: string
	cidade: string
	estado: string
	data_cadastro: Date
}

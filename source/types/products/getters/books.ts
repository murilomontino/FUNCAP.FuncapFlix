import {
	books,
	Category,
	FinancialResources,
	generos,
	products,
	tags,
} from '@/types'

export interface GetterBooks extends books, products {
	id: number
	produtoId: number
	titulo: string
	subTitulo: string
	isbn_13: string
	autor: string
	editora: string
	data_de_publicacao: string
	numero_de_paginas: number
	dimensoes: string
	sinopse: string
	ilustracao: boolean
	image: string
	pdf: string
	cpf: string
	cnpj: string
	categoria: Category
	recurso: FinancialResources
	patrocinadores: number
	fichaTecnica: number
	youtube: number
	sobre_a_obra: string
	link: string
	tags: tags[] | string[]
	generos: generos[] | string[]
	data_cadastro: Date
	isbn_10?: string
}

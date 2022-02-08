export type books = {
	id?: number
	produtoId: number
	titulo: string
	subTitulo: string
	isbn_13: string
	isbn_10?: string
	autor: string
	editora: string
	data_de_publicacao: string
	numero_de_paginas: number
	dimensoes: string
	sinopse: string
	ilustracao: boolean
}

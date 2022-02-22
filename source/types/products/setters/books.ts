import { Category } from '@/types'

import { SettersGenericProduct } from './products'

export interface SettersBooks extends SettersGenericProduct {
	categoria: Category.Literature
	titulo: string
	sub_titulo?: string
	isbn: string
	sinopse: string
	numero_de_paginas: number
	tamanho: string
	ilustracao: boolean
	editora: string
	ilustrador: string
	autor: string
}

export interface SettersBooksParams {
	categoria: Category.Literature
	titulo: string
	sub_titulo?: string
	isbn: string
	sinopse: string
	numero_de_paginas: number
	tamanho: string
	ilustracao: boolean
	editora: string
	ilustrador: string
	autor: string
}

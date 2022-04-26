import {
	Category,
	FinancialResources,
	TypesProducts,
	TypeImgCapa,
} from '@/types'

export interface SettersGenericProduct {
	produtoId?: number
	name_uuid?: string
	cpf?: string
	cnpj?: string
	arquivo?: string
	nome_arquivo?: string
	data_de_publicacao?: string
	generos?: string[]
	cidade?: string
	estado?: string
	tags?: string[]
	capa?: string
	sobre_a_obra?: string
	qr_code?: string
	tipo_capa?: TypeImgCapa
	link?: string
	patrocinadores?: number
	fichaTecnica?: number
	youtube?: number
	data_cadastro?: Date
	tipo?: TypesProducts
	img_perfil?: string
	categoria?: Category
	nome_cultural?: string
	cpfOrCnpj: string
	recurso: FinancialResources
	biografia: string
}

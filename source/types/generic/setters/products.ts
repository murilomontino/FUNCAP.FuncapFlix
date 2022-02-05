import {
	Category,
	FinancialResources,
	TypesProducts,
	TypeImgCapa,
} from '@/types'

export interface SettersGenericProduct {
	productId?: number
	exystBD?: boolean
	cpfOrCnpj?: string
	recurso: FinancialResources
	name_uuid?: string
	cpf?: string | null
	cnpj?: string | null
	arquivo?: string
	nome_arquivo?: string
	data_de_publicacao: string
	nome_cultural: string
	tipo?: TypesProducts
	generos?: string[]
	tags?: string[]
	capa?: string
	sobre_a_obra?: string
	qr_code?: string
	cidade?: string
	estado?: string
	tipo_capa?: TypeImgCapa
	categoria?: Category
	link?: string
	patrocinadores?: number
	fichaTecnica?: number
	youtube?: number
	data_cadastro?: Date
}

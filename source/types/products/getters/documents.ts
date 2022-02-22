import { TypesProducts } from '@/types/models/documents'

export interface AuxGettersDocs {
	documentId?: number
	produtoId: number
	tipo_de_arquivo: TypesProducts
	arquivo: string
	nome_arquivo: string
}

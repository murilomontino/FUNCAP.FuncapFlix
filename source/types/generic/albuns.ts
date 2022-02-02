import { Category } from '../categoriesProducts'
import { TypesProducts } from '../documents'
import { FinancialResources } from '../financialResources'
import { TypeMusicAlbuns } from '../musics'

export interface Albuns {
  id: number
  nome: string
  produtoId: number
  nome_unico: string
  tipo: TypeMusicAlbuns
  artista: string
  data_de_lancamento: string
  image: string
  tracks: Tracks[]
  cpf: string
  cnpj: string
  categoria: Category
  recurso: FinancialResources
  patrocinadores: number
  fichaTecnica: number
  youtube: number
  sobre_a_obra: string
  link: string
  tags: string[]
  generos: string[]
  data_cadastro: Date
}

export interface Tracks {
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

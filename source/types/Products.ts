export type InsertProductsAttributes = {
  titulo: string
  sub_titulo: string
  capa: string | undefined
  sinopse: string
  resumo: string
  genero: string[]
  tags: string[]
  categoria: number
  tipo: number
  nome_arquivo: string
  tipo_capa: string | undefined
  arquivo: string
}

export interface ProductsAttributes extends InsertProductsAttributes {
  id: number

  cidade: string
  estado: string
  link: string
  data_cadastro: Date
  id_artista: number
}

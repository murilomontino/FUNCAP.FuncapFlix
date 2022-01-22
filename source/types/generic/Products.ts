/* eslint-disable no-unused-vars */
import {
  FinancialResources,
  TypesProducts,
  Category,
  documents,
  TypeMusicAlbuns,
} from '@/types'
interface Product {
  cpfOrCnpj?: string
  recursos: FinancialResources
  arquivo: string
  conteudo?: string | ContentMusic
  nome_arquivo: string
  data_de_publicacao: string
  nome_cultural: string
  tipo: TypesProducts
  genero?: string[]
  tags?: string[]
}

interface GenericAttrs {
  productId?: string
  exystBD?: boolean
  titulo?: string
  name_uuid?: string
  sub_titulo?: string
  cpf?: string | null
  cnpj?: string | null
  capa?: string
  sinopse?: string
  sobre_a_obra?: string
  qr_code?: string
  cidade?: string
  estado?: string
  link?: string
  tipo_capa?: TypeImgCapa
  categoria?: Category
  patrocinadores?: number
  fichaTecnica?: number
  youtube?: number
  data_cadastro?: Date
  documentos?: documents[]
}

export interface ProductVideo extends Product, GenericAttrs {
  link: string
  categoria: Category.Video
}

export interface ProductMusic extends Product, GenericAttrs {
  titulo: string
  categoria: Category.Music
}

export interface ProductAlbum extends Product, GenericAttrs {
  albumId?: string
  titulo: string
  categoria: Category.Music
  tipo_de_album: TypeMusicAlbuns
}

export interface ProductBook extends Product, GenericAttrs {
  livroId?: number
  categoria: Category.Literature
  titulo: string
  isbn: string
  sinopse: string
  numero_de_paginas: number
  tamanho: string
  ilustracao: boolean
  editora: string
  ilustrador: string
  autor: string
}

export interface GenericProduct extends Product, GenericAttrs {
  [key: string]: any
}

export type TypeProduct =
  | ProductVideo
  | ProductMusic
  | ProductBook
  | ProductAlbum

export type TypeImgCapa = 'image/png' | 'image/jpeg'

export type ExtImgCapa = 'png' | 'jpg'

export type ContentMusic = 'album' | 'single' | 'interprete'

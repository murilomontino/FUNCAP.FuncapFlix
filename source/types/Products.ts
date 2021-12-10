/* eslint-disable no-unused-vars */
interface Product {
  cpfOrCnpj?: string
  recursos: FinancialResources
  arquivo: string
  conteudo?: string
  nome_arquivo: string
  data_de_publicacao: string
  nome_cultural: string
  tipo: TypesProducts
}

interface GenericAttrs {
  id?: string
  titulo?: string
  name_uuid?: string
  sub_titulo?: string
  cpf?: string | null
  cnpj?: string | null
  capa?: string
  sinopse?: string
  sobre_a_obra?: string
  qr_code?: string
  recursos_outros?: string
  genero?: string[] | string
  tags?: string[] | string
  cidade?: string
  estado?: string
  link?: string
  tipo_capa?: TypeImgCapa
  isbn?: string
  numero_de_paginas?: string
  tamanho?: string
  ilustracao?: boolean
  editora?: string
  ilustrador?: string
}

export interface ProductVideo extends Product, GenericAttrs {
  link: string
  categoria: Category.Video
}

export interface ProductMusic extends Product, GenericAttrs {
  titulo: string
  categoria: Category.Music
}

export interface ProductBook extends Product, GenericAttrs {
  categoria: Category.Literature
  titulo: string
  isbn: string
  sinopse: string
  numero_de_paginas: string
  tamanho: string
  ilustracao: boolean
  editora: string
  ilustrador: string
}

export interface GenericProduct extends Product, GenericAttrs {
  [key: string]: any
}

export type TypeProduct = ProductVideo | ProductMusic | ProductBook

export type TypeImgCapa = 'image/png' | 'image/jpeg'

export type ExtImgCapa = 'png' | 'jpg'

export enum FinancialResources {
  NaoInformado = 0,
  LeiAldirBlanc = 1,
  Funcart,
  RecursoDoArtista,
  Federal,
  Municipal,
  Outros = 99,
}

export enum Category {
  Music = 1,
  Literature,
  Video,
}
export enum TypesProducts {
  MP3 = 1,
  URL,
  PDF,
}

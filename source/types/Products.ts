/* eslint-disable no-unused-vars */

interface Product {
  cpfOrCnpj: string
  recursos: FinancialResources
  categoria: Category
  arquivo: string
  nome_arquivo: string
  tipo: TypesProducts
}

interface GenericAttrs {
  id?: string
  titulo?: string
  sub_titulo?: string
  capa?: string
  sinopse?: string
  resumo?: string
  qr_code?: string
  recursos_outros?: string
  genero?: string[] | string
  tags?: string[] | string
  cidade?: string
  estado?: string
  link?: string
  tipo_capa?: TypeImgCapa
}

interface ProductVideo extends Product, GenericAttrs {
  link: string
  categoria: Category.Video
}

interface ProductAudio extends Product, GenericAttrs {
  titulo: string
  categoria: Category.Music
}

interface ProductBook extends Product, GenericAttrs {
  categoria: Category.Literature
  titulo: string
  sinopse: string
}

export type AttrsProducts = ProductVideo | ProductAudio | ProductBook

export type TypeImgCapa = 'image/png' | 'image/jpeg'

export type ExtImgCapa = 'png' | 'jpeg'

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

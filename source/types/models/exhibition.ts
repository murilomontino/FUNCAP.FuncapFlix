/* eslint-disable no-unused-vars */
export type exhibition = {
  id?: number
  produtoId: number
  titulo: string
  data_de_inicio: string
  data_de_fim: string
  local: string
  // descricao: string; // sobre a obra
  artista: string
}

// Fotos sobre a exposição
export type exhibitionPhotos = {
  id?: number
  exibicaoId: number
  documentoId: number
  tipo_de_foto: ExhibitionPhotosTypes
  titulo: string
  descricao: string // biografia incluída
  data: string
  artista: string
}

export enum ExhibitionPhotosTypes {
  foto_de_montagem,
  foto_de_artista,
  foto_de_local,
  foto_de_evento,
  foto_de_abertura,
  outros,
}

// Obras de Exposição
export type exhibitionWorks = {
  id?: number
  exibicaoId: number
  documentoId: number
  titulo: string
  artista: string
  tecnica: string
  edicao: string
  impressao: string
  moldura: string
  ano: string
  dimencao: string
  obra_original: boolean
}

export type musicsAlbuns = {
  id?: number
  nome: string
  produtoId: number
  tipo: string
  data_de_lancamento: string
}

export type tracks = {
  id?: number
  albumMusicalId: number
  nome: string
  artista: string
  duracao: string
  compositor: string
}

export enum TypeMusicAlbuns {
  'single' = 1,
  'ep',
  'album_interprete',
  'album',
}
import { musicsAlbums, products, AuxGettersDocs } from '@/types'

import { tracks } from '../../models/musics'

export interface GettersAlbums extends musicsAlbums, products {
	id: number
	image: string
	tracks: GettersTracks[]
}

export interface GettersTracks extends tracks, AuxGettersDocs {
	id: number
}

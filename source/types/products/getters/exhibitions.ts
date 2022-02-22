import { products, AuxGettersDocs } from '@/types'

import {
	exhibition,
	exhibitionPhotos,
	exhibitionWorks,
} from '../../models/exhibition'

export interface GettersExhibitions extends exhibition, products {
	id: number
	image: string
	works: exhibitionWorks[]
	photos: exhibitionPhotos[]
}

export interface GettersExhibitionsPhotos
	extends exhibitionPhotos,
		AuxGettersDocs {
	produtoId: number
}
export interface GettersExhibitionsWorks
	extends exhibitionWorks,
		AuxGettersDocs {
	produtoId: number
}

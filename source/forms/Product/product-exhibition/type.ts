import { Document, FormProduct } from '../types'

export type keys =
  | 'type'
  | 'name'
  | 'size'
  | 'mimeType'
  | 'uri'
  | 'tipo_de_foto'
  | 'descricao'
  | 'data'
  | 'titulo'

export interface FormProductExhibition
  extends Omit<FormProduct, 'publishedDate | onChangePublishedDate'> {
  titleExhibition: string
  descriptionExhibition: string
  location: string
  biography: string
  photoOfArtist: Document
  startDate: string
  endDate: string
  file: Document[]
  mapFiles: Map<keys, string>[]
  onChangeBiography: (value: string) => void
  onChangePhotoOfArtist: (value: Document) => void
  onChangeTitleExhibition: (value: string) => void
  onChangeDescriptionExhibition: (value: string) => void
  onChangeLocation: (value: string) => void
  onChangeStartDate: (value: string) => void
  onChangeEndDate: (value: string) => void
  onChangeFile: (files: Document[]) => Promise<void>
  onChangeAttrPhotos: (value: string, index: number, key: keys) => void
  resetProductExhibition: () => void
  onRemovePhoto: (index: number) => void
}

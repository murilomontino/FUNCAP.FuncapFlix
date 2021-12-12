import { Category, FinancialResources, TypesProducts } from '@/types/Products'

export type Document = {
  type: 'success'
  name: string
  size?: number | undefined
  uri: string
  mimeType?: string | undefined
  lastModified?: number | undefined
  file?: any
  output?: any
}

export type FormProduct = {
  cpfOrCnpj: string
  culturalName: string
  publishedDate: string
  financialResources: FinancialResources
  capa: Document
  category: Category
  genero: string[]
  type: TypesProducts
  tags: string[]
  cpfOrCnpjIsValid: boolean
  onChangePublishedDate: (date: string) => void
  onChangeCulturalName: (value: string) => void
  onChangeFinancialResources: (value: FinancialResources) => void
  onChangeCPForCNPJ: (text: string) => void
  onChangeCPForCNPJIsValid: (value: boolean) => void
  getImage: () => Promise<boolean>
  onChangeCategory: (value: Category) => void
  onChangeType: (value: TypesProducts) => void
  onChangeTags: (tags: string[]) => void
  onChangeGeneros: (generos: string[]) => void
  onChangeImageURL: (value: string, title: string) => void
  resetProduct: () => void
}

export type FormProductMusic = {
  title: Array<string>
  file: Document[]
  onChangeFile: () => void
  onChangeTitle: (text: Array<string>) => void
  resetProductMusic: () => void
}

export type FormProductBook = {
  title: string
  subTitle: string
  isbn: string
  sinopse: string
  sobreAObra: string
  numberOfPages: string
  publisher: string
  size: string
  illustrated: boolean
  illustrator: string
  file: Document
  onChangeFile: () => void
  onChangeIllustrator: (text: string) => void
  onChangeNumberOfPages: (text: string) => void
  onChangePublisher: (text: string) => void
  onChangeSize: (text: string) => void
  onChangeIllustrated: (value: boolean) => void
  onChangeISBN: (value: string) => void
  onChangeTitle: (text: string) => void
  onChangeSubTitle: (text: string) => void
  onChangeSinopse: (text: string) => void
  onChangeSobreAObra: (text: string) => void
  resetProductBook: () => void
}

export const mapTypeProduct: { [key in TypesProducts]: string } = {
  [TypesProducts.PDF]: 'Livro',
  [TypesProducts.MP3]: 'Música(s)',
  [TypesProducts.URL]: 'URL',
}

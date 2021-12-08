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
  financialResources: FinancialResources
  capa: Document
  category: Category
  file: Document
  genero: string[]
  type: TypesProducts
  tags: string[]
  cpfOrCnpjIsValid: boolean
  onChangeFinancialResources: (value: FinancialResources) => void
  onChangeFile: () => void
  onChangeCPForCNPJ: (text: string) => void
  onChangeCPForCNPJIsValid: (value: boolean) => void
  getImage: () => Promise<boolean>
  onChangeCategory: (value: Category) => void
  onChangeType: (value: TypesProducts) => void
  onChangeTags: (tags: string[]) => void
  onChangeGeneros: (generos: string[]) => void
  resetProduct: () => void
}

export type FormProductMusic = {
  title: string
  onChangeTitle: (text: string) => void
  resetProductMusic: () => void
}

export type FormProductBook = {
  title: string
  subTitle: string
  isbn: string
  sinopse: string
  sobreAObra: string
  onChangeISBN: (value: string) => void
  onChangeTitle: (text: string) => void
  onChangeSubTitle: (text: string) => void
  onChangeSinopse: (text: string) => void
  onChangeSobreAObra: (text: string) => void
  resetProductBook: () => void
}

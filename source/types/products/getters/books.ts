import { books, products } from '@/types'

export interface GetterBooks extends books, products {
  id: number
  image: string
  pdf: string
  existDB?: boolean
}

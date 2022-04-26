import { books, products } from '@/types'
import { artists } from '@/types/models/artists'

export interface GetterBooks
  extends books,
    products,
    Omit<artists, 'nome_cultural'> {
  id: number
  image: string
  pdf: string
  autor: string
  existDB?: boolean
}

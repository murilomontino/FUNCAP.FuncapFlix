import React from 'react'
import { View } from 'react-native'

import { FinancialResources, TypesProducts } from '@/types'

import Dropdown from '@/components/atom/dropdown'
import GetImageButton from '@/components/atom/get-image-button'
import MultipleSelectedGenero from '@/components/atom/multiple-selected-genero'

import {
  useFormBookCategory,
  useFormBookFinancialResources,
  useFormBookGenres,
  useFormBookThumbnail,
} from '@/forms/Product/product-book/hooks'

import GetFileButton from '../../atoms/get-file-button'

import { useSize } from '@/hooks/use-size'

const ItemsTypesProducts = [
  { label: 'MP3', value: TypesProducts.MP3 },
  { label: 'Link', value: TypesProducts.URL },
  { label: 'PDF', value: TypesProducts.PDF },
]

const ItemsFinancialResources = [
  { label: 'Lei Aldir Blanc ', value: FinancialResources.LeiAldirBlanc },
  {
    label: 'Recursos do Artista',
    value: FinancialResources.RecursoDoArtista,
  },
  { label: 'Funcart', value: FinancialResources.Funcart },
  { label: 'Municipal', value: FinancialResources.Municipal },
  { label: 'Federal', value: FinancialResources.Federal },
]

const Left = () => {
  const { size, web, SCREEN_SMALLER_THAN_LARGE_SIZE } = useSize()
  const { onChangeType, type } = useFormBookCategory()
  const { onChangeFinancialResources, financialResources } =
    useFormBookFinancialResources()

  const { thumbnail, onChangeThumbnail } = useFormBookThumbnail()

  const { genres, onChangeGenres } = useFormBookGenres()

  return (
    <View
      style={{
        flex: SCREEN_SMALLER_THAN_LARGE_SIZE ? 3.5 : 1,
        height: '100%',
        maxWidth: SCREEN_SMALLER_THAN_LARGE_SIZE ? '80%' : 300,
        justifyContent: 'flex-start',
        marginLeft: web ? 0 : 40,
        borderColor: 'rgba(0,0,0, 0.4)',
      }}
    >
      <GetImageButton image={thumbnail} onChangeImage={onChangeThumbnail} />
      <Dropdown
        items={ItemsTypesProducts}
        onChangeValue={onChangeType}
        value={type}
        disabled={true}
        label="Selecione o Tipo"
      />

      <GetFileButton />

      <Dropdown
        requered
        items={ItemsFinancialResources}
        onChangeValue={onChangeFinancialResources}
        value={financialResources}
        label={'Recursos'.toUpperCase()}
      />
      <MultipleSelectedGenero value={genres} onChangeValue={onChangeGenres} />
    </View>
  )
}

export default Left

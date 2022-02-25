import React from 'react'
import { View, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

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
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen
  const { onChangeType, type } = useFormBookCategory()
  const { onChangeFinancialResources, financialResources } =
    useFormBookFinancialResources()

  const { thumbnail, onChangeThumbnail } = useFormBookThumbnail()

  const { genres, onChangeGenres } = useFormBookGenres()

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        maxWidth: 300,
        minHeight: size.height,
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

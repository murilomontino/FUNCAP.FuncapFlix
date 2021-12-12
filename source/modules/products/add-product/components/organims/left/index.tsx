import React, { useMemo } from 'react'
import { View, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { Category, FinancialResources, TypesProducts } from '@/types/Products'

import Dropdown from '@/components/atom/dropdown'

import {
  useFormProductCategory,
  useFormProductFinancialResources,
} from '@/forms/Product/hooks'

import GetFileButton from '../../atoms/get-file-button'
import GetImageButton from '../../atoms/get-image-button'
import MultipleSelectedGenero from '../../atoms/multiple-selected-genero'

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
  const { category, onChangeType, type } = useFormProductCategory()
  const { onChangeFinancialResources, financialResources } =
    useFormProductFinancialResources()

  const marginBottom = useMemo(() => {
    if (size.width < 1127 && category === Category.Music) {
      return 200
    }
    return 0
  }, [category, window.width])

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
      <GetImageButton />
      <Dropdown
        items={ItemsTypesProducts}
        onChangeValue={onChangeType}
        value={type}
        disabled={true}
        label="Selecione o Tipo"
      />

      <GetFileButton category={category} />
      <Dropdown
        items={ItemsFinancialResources}
        onChangeValue={onChangeFinancialResources}
        value={financialResources}
        label="Recursos"
      />
      {category === Category.Literature && <MultipleSelectedGenero />}
    </View>
  )
}

export default Left

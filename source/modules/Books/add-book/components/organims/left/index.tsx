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

const ItemsFincancialResources = [
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
  const { window } = useDimensions()
  const { category, onChangeType, type } = useFormProductCategory()
  const { onChangeFinancialResources, financialResources } =
    useFormProductFinancialResources()

  const marginBotton = useMemo(() => {
    if (window.width < 1127 && category === Category.Music) {
      return 200
    }
    return 0
  }, [category, window.width])

  return (
    <View
      style={{
        flex: 1,
        maxWidth: 300,
        height: window.height,
        marginLeft: web ? 0 : 40,
        marginBottom: marginBotton,
        borderRightWidth: window.width < 1127 ? 0 : 1,
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

      <GetFileButton />
      <Dropdown
        items={ItemsFincancialResources}
        onChangeValue={onChangeFinancialResources}
        value={financialResources}
        label="Recursos"
      />
      {category === Category.Literature && <MultipleSelectedGenero />}
    </View>
  )
}

export default Left

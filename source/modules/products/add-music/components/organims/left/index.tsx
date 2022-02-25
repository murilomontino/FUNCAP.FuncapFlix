import React from 'react'
import { View, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { DocumentResult } from 'expo-document-picker'

import { FinancialResources, TypesProducts } from '@/types'

import Dropdown from '@/components/atom/dropdown'
import GetImageButton from '@/components/atom/get-image-button'

import {
  useFormMusicFinancialResources,
  useFormMusicCategory,
  useFormMusicImage,
} from '@/forms/Product/product-music/hooks'

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
  const { onChangeType, type } = useFormMusicCategory()
  const { onChangeFinancialResources, financialResources } =
    useFormMusicFinancialResources()
  const { onChangeImage, image } = useFormMusicImage()

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
      <GetImageButton
        onChangeImage={onChangeImage}
        image={image as unknown as DocumentResult}
        width={200}
      />
      <Dropdown
        items={ItemsTypesProducts}
        onChangeValue={onChangeType}
        value={type}
        disabled={true}
        label="Selecione o Tipo"
      />
      <Dropdown
        items={ItemsFinancialResources}
        onChangeValue={onChangeFinancialResources}
        value={financialResources}
        label={'Recursos'.toUpperCase()}
        requered
      />
    </View>
  )
}

export default Left

import React from 'react'
import { View, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { FinancialResources } from '@/types'

import Dropdown from '@/components/atom/dropdown'
import GetImageButton from '@/components/atom/get-image-button'
import InputTags from '@/components/atom/tags'

import {
  useFormExhibitionFinancialResources,
  useFormExhibitionImage,
  useFormExhibitionTags,
} from '@/forms/Product/product-exhibition/hooks'

import SendFormBookButton from '../../atoms/send-form-button'

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
  const { onChangeFinancialResources, financialResources } =
    useFormExhibitionFinancialResources()

  const { image, onChangeImage } = useFormExhibitionImage()

  const { tags, onChangeTags } = useFormExhibitionTags()

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
        image={image}
        onChangeImage={onChangeImage}
        height={200}
        width={200}
      />

      <Dropdown
        requered
        items={ItemsFinancialResources}
        onChangeValue={onChangeFinancialResources}
        value={financialResources}
        label={'Recursos'.toUpperCase()}
      />
      <InputTags onChangeTags={onChangeTags} tags={tags} />
      <SendFormBookButton />
    </View>
  )
}

export default Left

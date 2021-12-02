import React, { useMemo } from 'react'
import { View, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { useFormProductCategory } from 'forms/Product'
import { Category, TypesProducts } from 'types/Products'

import DropdownResources from '../../atoms/dropdown-resources'
import DropdownTypes from '../../atoms/dropdown-types'
import GetImageButton from '../../atoms/get-image-button'
import GetMP3Button from '../../atoms/get-mp3-button'
import GetPDFButton from '../../atoms/get-pdf-button'
import MultipleSelectedGenero from '../../atoms/multiple-selected-genero'

const Left = () => {
  const web = Platform.OS === 'web'
  const { window } = useDimensions()
  const { type, category } = useFormProductCategory()

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
      <DropdownTypes />
      {type === TypesProducts.PDF && <GetPDFButton />}
      {type === TypesProducts.MP3 && <GetMP3Button />}
      <DropdownResources />
      {category === Category.Literature && <MultipleSelectedGenero />}
    </View>
  )
}

export default Left

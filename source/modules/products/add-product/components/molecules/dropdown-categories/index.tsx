import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Category } from '@/types/Products'

import { useFormProductCategory } from '@/forms/Product/hooks'

import styles from '@/global/styles'

const DropdownCategories = () => {
  const { onChangeCategory } = useFormProductCategory()

  const [items, setItems] = useState([
    { label: 'Música', value: Category.Music },
    { label: 'Literatura', value: Category.Literature },
    /* { label: 'Video', value: Category.Video }, */
  ])

  return (
    <SelectDropdown
      data={items}
      onSelect={(selectedItem, index) => {
        onChangeCategory(selectedItem.value)
      }}
      defaultButtonText={'CATEGORIAS'}
      buttonStyle={styles.buttonContainer}
      buttonTextStyle={{
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 14,
      }}
      renderDropdownIcon={() => {
        return <FontAwesome name="chevron-down" color={'#fff'} size={14} />
      }}
      dropdownIconPosition={'right'}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem.label
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item.label
      }}
      rowStyle={{
        justifyContent: 'center',
        margin: 4,
        padding: 8,
      }}
    />
  )
}

export default DropdownCategories

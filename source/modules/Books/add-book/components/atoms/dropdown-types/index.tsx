import React, { useEffect, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'

import { useFormProductCategory } from 'forms/Product'
import colors from 'global/colors'
import { TypesProducts } from 'types/Products'

import { styles } from '../styles'

const DropdownTypes = () => {
  const [open, setOpen] = useState(false)

  const { onChangeType, type } = useFormProductCategory()

  const [value, setValue] = useState('')
  const [items, setItems] = useState([
    { label: 'MP3', value: TypesProducts.MP3 },
    { label: 'Link', value: TypesProducts.URL },
    { label: 'PDF', value: TypesProducts.PDF },
  ])

  useEffect(() => {
    select()
  }, [type])

  const select = () => {
    const selectedItem = items.find((item) => item.value === type)
    if (selectedItem) {
      setValue(selectedItem.label)
    }
  }

  return (
    <SelectDropdown
      data={items}
      onSelect={(selectedItem, index) => {
        onChangeType(selectedItem.value)
      }}
      disabled={true}
      buttonStyle={[styles.buttonContainer, { backgroundColor: colors.grey20 }]}
      buttonTextStyle={{
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 14,
      }}
      /* renderDropdownIcon={() => {
        return <FontAwesome name="chevron-down" color={'#fff'} size={14} />
      }} */
      defaultButtonText={value ? value : 'TIPO DE ARQUIVO'}
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

export default DropdownTypes

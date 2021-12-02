import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { useFormProductFinancialResources } from 'forms/Product'
import { FinancialResources } from 'types/Products'

import { styles } from '../styles'

const DropdownResources = () => {
  const { onChangeFinancialResources } = useFormProductFinancialResources()

  const [items, setItems] = useState([
    { label: 'Lei Aldir Blanc ', value: FinancialResources.LeiAldirBlanc },
    {
      label: 'Recursos do Artista',
      value: FinancialResources.RecursoDoArtista,
    },
    { label: 'Funcart', value: FinancialResources.Funcart },
    { label: 'Municipal', value: FinancialResources.Municipal },
    { label: 'Federal', value: FinancialResources.Federal },
  ])

  return (
    <SelectDropdown
      data={items}
      onSelect={(selectedItem, index) => {
        onChangeFinancialResources(selectedItem.value)
      }}
      defaultButtonText={'RECURSOS'}
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

export default DropdownResources

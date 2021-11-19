/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react'
import { StyleSheet } from 'react-native'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'
import Icon from 'react-native-vector-icons/MaterialIcons'

import items from './items'

const MultipleSelectedGenero = () => {
  const [selectedItems, setSelectedItems] = useState([])

  const multiSelect = useRef()

  const onSelectedItemsChange = (selectItems) => {
    console.log(selectItems)

    setSelectedItems(selectItems)
  }

  return (
    <SectionedMultiSelect
      items={items}
      IconRenderer={Icon}
      uniqueKey="name"
      subKey="children"
      selectText="Escolha um Gênero"
      showDropDowns={true}
      readOnlyHeadings={true}
      onSelectedItemsChange={onSelectedItemsChange}
      selectedItems={selectedItems}
      styles={{
        modalWrapper: {
          justifyContent: 'center',
        },

        subSeparator: {
          display: 'none',
        },
        button: {
          minHeight: 80,
          margin: 12,
          alignSelf: 'center',
          width: '20%',
        },
        selectedSubItemText: {
          color: 'green',
        },
        chipsWrapper: {
          justifyContent: 'center',
        },
      }}
    />
  )
}

export default MultipleSelectedGenero

const styles = StyleSheet.create({})

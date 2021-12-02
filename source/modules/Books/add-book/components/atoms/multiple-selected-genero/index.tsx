/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { useFormProductGenero } from 'forms/Product'

import items from './items'

import { styles } from '../styles'

const MultipleSelectedGenero = () => {
  const multiSelect = useRef()
  const { genero, onChangeGeneros } = useFormProductGenero()
  const onSelectedItemsChange = (selectItems) => {
    onChangeGeneros(selectItems)
  }

  return (
    <SectionedMultiSelect
      items={items}
      IconRenderer={Icon}
      uniqueKey="name"
      subKey="children"
      selectText="Gênero"
      selectedText="itens"
      showDropDowns={true}
      readOnlyHeadings={true}
      onSelectedItemsChange={onSelectedItemsChange}
      selectedItems={genero}
      styles={{
        container: {
          width: '60%',
          alignSelf: 'center',
        },
        modalWrapper: {
          justifyContent: 'center',
        },
        selectToggle: [styles.buttonContainer],
        selectToggleText: {
          color: '#fff',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: 14,
        },
        chipContainer: {
          backgroundColor: '#f1f1f1',
        },
        subItemText: {
          color: '#666666',
        },
        chipText: {
          flexWrap: 'wrap',
          maxWidth: 200,
          color: '#141414',
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
          marginBottom: 40,
        },
      }}
    />
  )
}

export default MultipleSelectedGenero

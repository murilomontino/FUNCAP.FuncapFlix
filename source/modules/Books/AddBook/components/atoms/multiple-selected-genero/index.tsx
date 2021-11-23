/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { useFormProductGenero } from 'forms/Product'

import items from './items'

const MultipleSelectedGenero = () => {
  const multiSelect = useRef()
  const { genero, onChangeGeneros } = useFormProductGenero()
  const onSelectedItemsChange = (selectItems) => {
    onChangeGeneros(selectItems)
  }

  return (
    <View style={{ margin: 20 }}>
      <SectionedMultiSelect
        items={items}
        IconRenderer={Icon}
        uniqueKey="name"
        subKey="children"
        selectText="Escolha um Gênero"
        selectedText="itens"
        showDropDowns={true}
        readOnlyHeadings={true}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={genero}
        styles={{
          modalWrapper: {
            justifyContent: 'center',
          },
          selectToggleText: {
            color: '#848787',
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
          },
        }}
      />
    </View>
  )
}

export default MultipleSelectedGenero

const styles = StyleSheet.create({})

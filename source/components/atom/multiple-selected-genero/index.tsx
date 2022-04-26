/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import SectionedMultiSelect from '../react-native-sectioned-multi-select'
import items from './items'

import colors from '@/global/colors'

type Props = {
  value: string[]
  onChangeValue: (value: string[]) => void
}

const MultipleSelectedGenero = ({ onChangeValue, value }: Props) => {
  const onSelectedItemsChange = (selectItems) => {
    onChangeValue(selectItems)
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
      selectedItems={value}
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

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.button_secondary,
    borderRadius: 4,
    width: 250,
    height: 50,
    margin: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: colors.grey20,
  },
})

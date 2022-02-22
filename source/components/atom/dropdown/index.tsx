import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import colors from '@/global/colors'
import styles from '@/global/styles'

type Props = {
  onChangeValue: (value: number) => void
  items: Array<{ label: string; value: number }>
  value: number
  disabled?: boolean
  label?: string
  color?: string
  requered?: boolean
  styleContainerButton?: ViewStyle | ViewStyle[]
}

const Dropdown = ({
  items,
  value,
  onChangeValue,
  color = colors.white,
  disabled = false,
  requered = false,
  label = 'Selecione',
  styleContainerButton,
}: Props) => {
  useEffect(() => {
    select()
  }, [value])

  const [labelState, setLabel] = useState(label)

  const select = () => {
    const selectedItem = items.find((item) => item.value === value)
    if (selectedItem) {
      setLabel(selectedItem.label)
    }
  }

  return (
    <SelectDropdown
      data={items}
      onSelect={(selectedItem, index) => {
        setLabel(selectedItem.label)
        onChangeValue(selectedItem.value)
      }}
      defaultButtonText={labelState}
      buttonStyle={[
        styles.buttonContainer,
        styleContainerButton,
        disabled && { backgroundColor: colors.grey20 },
      ]}
      buttonTextStyle={{
        color: colors.redSecondary,
        textTransform: 'uppercase',
        fontSize: 14,
      }}
      renderCustomizedButtonChild={(selectedItem, index) => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: color,
              fontWeight: '500',
            }}
          >
            {selectedItem?.label.toUpperCase() ?? labelState}
          </Text>
          {requered && <Text style={styleDefault.topicRequered}>*</Text>}
        </View>
      )}
      renderDropdownIcon={() => {
        return <FontAwesome name="chevron-down" color={'#fff'} size={14} />
      }}
      disabled={disabled}
      dropdownIconPosition={'right'}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return labelState
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

export default Dropdown

const styleDefault = StyleSheet.create({
  topicRequered: {
    fontWeight: 'bold',
    color: colors.redSecondary,
    fontSize: 18,
    textAlign: 'right',
    paddingLeft: 2,
  },
})

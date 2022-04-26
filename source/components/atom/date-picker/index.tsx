import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
  View,
} from 'react-native'

import DatePicker from '@react-native-community/datetimepicker'

import { FontAwesome5 } from '@expo/vector-icons'

import colors from '@/global/colors'

import { FormatDate } from '@/utils/format-date'

type Props = {
  value: Date
  onChangeValue: (text: Date) => void
  colorIcon?: string
  styleTitleButton?: StyleProp<TextStyle>
  containerButton?: StyleProp<ViewStyle>
  disabled?: boolean
} & {
  value: Date
  onChangeValue: (text: Date) => void
  colorIcon?: string
  topic: string
  styleTitleButton?: StyleProp<TextStyle>
  containerButton?: StyleProp<ViewStyle>
  stylesViewTitle?: StyleProp<ViewStyle>
  maxWidthTitle?: number | string
  styleTopic?: StyleProp<TextStyle>
  requered?: boolean
  disabled?: boolean
  minimumDate?: Date
}

const PickerTecno = ({
  value,
  onChangeValue,
  containerButton,
  disabled = false,
  styleTitleButton,
  colorIcon = colors.white,
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false)

  const onChange = (_: any, selectedDate: any) => {
    const currentDate = selectedDate || value
    setModalVisible(Platform.OS === 'ios')
    onChangeValue(currentDate)
  }

  return (
    <View>
      {modalVisible && (
        <DatePicker
          value={value}
          mode="date"
          display="default"
          onChange={onChange}
          disabled={disabled}
          minimumDate={new Date(new Date().getFullYear() - 105, 0, 1)}
          maximumDate={new Date()}
        />
      )}
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true)
        }}
        style={[styles.containerButton, containerButton]}
      >
        <FontAwesome5 name="calendar-alt" color={colorIcon} />
        <Text style={[styles.textButton, styleTitleButton]}>
          {FormatDate(value)}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default PickerTecno

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 8,
  },
  titleStyle: {
    color: colors.black,
    fontWeight: 'bold',
    padding: 4,
    marginBottom: 4,
    textAlign: 'center',
  },
  textStyle: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    marginLeft: 10,
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.button,
    borderRadius: 0,
    textDecorationColor: colors.button_secondary,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center',
  },
  textButton: {
    padding: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
    margin: 2,
  },
})

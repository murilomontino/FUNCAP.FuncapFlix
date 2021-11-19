import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import colors from 'global/colors'

const TextAreaResumo = () => {
  return (
    <View style={styles.textAreaContainer}>
      <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={4}
        maxLength={5000}
      />
    </View>
  )
}

export default TextAreaResumo

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: colors.grey20,
    borderWidth: 0.2,
    padding: 5,
  },
  textArea: {
    height: 150,
    backgroundColor: '#fff',

    justifyContent: 'flex-start',
  },
})

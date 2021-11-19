import React from 'react'
import { StyleSheet, View, TextInput, Platform, Text } from 'react-native'

import colors from 'global/colors'

const InputSubTitle = () => {
  const web = Platform.OS === 'web'
  return (
    <View style={styles.textAreaContainer}>
      <Text
        style={{
          fontWeight: 'bold',
        }}
      >
        Sub-Título:
      </Text>
      <TextInput
        style={[
          styles.textArea,
          web && {
            outlineColor: 'orange',
            //outlineOffset: ? NumberOrString,
            //outlineStyle: ? string,
            outlineWidth: 0,
          },
        ]}
        maxLength={255}
      />
    </View>
  )
}

export default InputSubTitle

const styles = StyleSheet.create({
  textAreaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    boxShadow: 0,
  },
  textArea: {
    backgroundColor: '#ddd',
    borderColor: colors.grey20,
    padding: 8,
    borderWidth: 0.2,
    justifyContent: 'flex-start',
  },
})

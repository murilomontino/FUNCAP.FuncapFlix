import React from 'react'
import { StyleSheet, View, TextInput, Platform, Text } from 'react-native'

import colors from 'global/colors'

const TextAreaSinopse = () => {
  const web = Platform.OS === 'web'
  return (
    <View style={styles.textAreaContainer}>
      <Text
        style={{
          fontWeight: 'bold',
        }}
      >
        Resumo:
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
        multiline={true}
        numberOfLines={4}
        maxLength={5000}
      />
    </View>
  )
}

export default TextAreaSinopse

const styles = StyleSheet.create({
  textAreaContainer: {
    alignSelf: 'flex-start',

    padding: 5,
    boxShadow: 0,
  },
  textArea: {
    height: 300,
    width: 600,
    backgroundColor: '#fff',
    borderColor: colors.grey20,
    borderWidth: 0.2,
    justifyContent: 'flex-start',
  },
})

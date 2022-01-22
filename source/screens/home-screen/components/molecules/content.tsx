import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ContentSlide = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        Hello World
      </Text>
    </View>
  )
}

export default ContentSlide

const styles = StyleSheet.create({})

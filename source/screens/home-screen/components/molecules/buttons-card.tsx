import React from 'react'
import { StyleSheet, View } from 'react-native'

import Button from '@/components/atom/button'

const ButtonsCard = () => {
  const styleButton = {
    height: 20,
    width: '30%',
    backgroundColor: 'transparent',
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        text="Assistir"
        disabled={false}
        style={{
          flex: 1,
          ...styleButton,
        }}
        textStyle={{
          color: '#fff',
          alignSelf: 'center',
          fontSize: 12,
        }}
      />
      <Button
        text="Ver Mais"
        disabled={false}
        style={{
          flex: 1,
          ...styleButton,
        }}
        textStyle={{
          color: '#fff',
          alignSelf: 'center',
          fontSize: 12,
        }}
      />
    </View>
  )
}

export default ButtonsCard

const styles = StyleSheet.create({})

import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'

import colors from '@/global/colors'

type Props = {
  generos: string | string[] | undefined
}

const GenerosLiterarios = ({ generos }: Props) => {
  const [itensGeneros] = useState(() => {
    if (generos) {
      if (typeof generos === 'string') {
        return generos.split(',')
      }

      return generos
    } else {
      return []
    }
  })

  return (
    <>
      {itensGeneros.map((tag) => (
        <Text style={generosStyles.generos} key={tag}>
          {tag}
        </Text>
      ))}
    </>
  )
}

export default GenerosLiterarios

const generosStyles = StyleSheet.create({
  generos: {
    margin: 4,
    borderRadius: 40,
    padding: 8,
    fontSize: 10,
    backgroundColor: '#f5f5f5',
    borderColor: colors.grey20,
    borderWidth: 1,
    color: colors.grey20,
  },
})

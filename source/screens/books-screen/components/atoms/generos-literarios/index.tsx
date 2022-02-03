import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'

import { generos } from '@/types'

import colors from '@/global/colors'

type Props = {
  generos: generos[]
}

const GenerosLiterarios = ({ generos }: Props) => {
  const [itensGeneros] = useState(generos ?? [])

  return (
    <>
      {itensGeneros.map((genero) => (
        <Text style={generosStyles.generos} key={genero.id}>
          {genero.genero}
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

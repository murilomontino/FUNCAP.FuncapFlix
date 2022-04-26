import React from 'react'
import { StyleSheet, Text } from 'react-native'

import colors from '@/global/colors'

type Props = {
  description: string
}

const DescriptionMovie = ({ description }: Props) => {
  return (
    <Text
      style={{
        padding: 8,
        color: colors.white,
        fontSize: 10,
        textAlign: 'justify',
        textTransform: 'capitalize',
        lineHeight: 16,
      }}
    >
      {description.slice(0, 255).replaceAll('\n', '').concat('...')}
    </Text>
  )
}

export default DescriptionMovie

const styles = StyleSheet.create({})

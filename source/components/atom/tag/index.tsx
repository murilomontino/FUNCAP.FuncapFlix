import React from 'react'
import { Text } from 'react-native'

import { Container } from './styles'

import colors from '@/global/colors'

type Props = {
  tag: string
  onChangeRemoveTags: (index: number) => void
  index: number
}

const Tag = ({ onChangeRemoveTags, tag, index }: Props) => {
  return (
    <Container>
      <Text
        style={{
          fontSize: 10,
          color: colors.grey20,
          fontWeight: '600',
          paddingLeft: 4,
        }}
      >
        {tag}
      </Text>
      <Text
        onPress={() => onChangeRemoveTags(index)}
        style={{
          color: '#f00',
          fontSize: 8,
          padding: 4,
          marginLeft: 4,
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        X
      </Text>
    </Container>
  )
}

export default Tag

import React, { useMemo, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { tags } from '@/types'

import colors from '@/global/colors'

type Props = {
  tags: tags[]
}

const CardTag = ({ tags }: Props) => {
  const [itensTags] = useState(tags ?? [])

  const memoTags = useMemo(() => itensTags.slice(0, 7), [itensTags])

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 400,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {memoTags.map((tag, index) => (
        <Text style={tagsStyles.tags} key={index}>
          {tag}
        </Text>
      ))}
    </View>
  )
}

export default CardTag

const tagsStyles = StyleSheet.create({
  tags: {
    margin: 4,
    borderRadius: 40,
    padding: 8,
    fontSize: 12,
    backgroundColor: '#f5f5f5',
    borderColor: colors.grey20,
    borderWidth: 1,
    color: colors.grey20,
  },
})

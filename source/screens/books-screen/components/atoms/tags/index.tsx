import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '@/global/colors'

type Props = {
  tags: string | string[] | undefined
}

const Tags = ({ tags }: Props) => {
  const [itensTags] = useState(() => {
    if (tags) {
      if (typeof tags === 'string') {
        return tags.split(',')
      }

      return tags
    } else {
      return []
    }
  })

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
      {itensTags.map((tag) => (
        <Text style={tagsStyles.tags} key={tag}>
          {tag}
        </Text>
      ))}
    </View>
  )
}

export default Tags

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

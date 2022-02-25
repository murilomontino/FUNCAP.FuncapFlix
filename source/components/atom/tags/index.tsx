import React, { MutableRefObject, useState } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Tags from 'react-native-tags'

import colors from '@/global/colors'

type Props = {
  tags: string[] | MutableRefObject<string[]>
  onChangeTags: (text: string[]) => void
}

const InputTags = ({ onChangeTags, tags }: Props) => {
  const [selectedTags, setSelectedTags] = useState(() => {
    if (Array.isArray(tags)) {
      return tags
    }
    return tags.current
  })

  const onChangeSelectedTags = (text: string[]) => {
    setSelectedTags(text)
    onChangeTags(text)
  }

  return (
    <View style={{ padding: 12 }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontFamily: 'Consolas',
          textAlign: 'center',
          color: '#f1f1f1',
          fontSize: 14,
          padding: 12,
          margin: 4,
        }}
      >
        Tags:
      </Text>
      <Text
        style={{
          fontSize: 12,
          textAlign: 'center',
          fontFamily: 'Consolas',
          color: '#f6f6f6',
          padding: 12,
        }}
      >
        As tags são geradas automaticamente a partir da virgula
      </Text>
      <Tags
        initialText=""
        textInputProps={{
          placeholder: 'Tags',
        }}
        initialTags={selectedTags}
        onChangeTags={onChangeSelectedTags}
        containerStyle={{
          justifyContent: 'center',
          borderColor: colors.grey20,
        }}
        tagContainerStyle={{
          borderRadius: 40,
          borderWidth: 1,
          borderColor: colors.grey20,
        }}
        inputStyle={{
          backgroundColor: '#f2f2f2',
          borderRadius: 40,
          borderWidth: 1,
          borderColor: colors.grey20,
        }}
        createTagOnString={[',']}
        renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
          <TouchableOpacity
            style={{
              borderRadius: 40,
              borderWidth: 1,
              padding: 8,
              backgroundColor: '#f1f1f1',
              borderColor: '#848787',
            }}
            key={`${tag}-${index}`}
            onPress={onPress}
          >
            <Text>{tag}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default InputTags

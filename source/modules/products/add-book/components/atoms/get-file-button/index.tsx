import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { useFormBookFile } from '@/forms/Product/product-book/hooks'

import { styles } from '../styles'

type Props = {
  requered?: boolean
  message?: string
}

export const GetFileButton = ({
  requered = true,
  message = 'Selecione um arquivo',
}: Props) => {
  // Busca um arquivo no formato PDF
  const { file, onChangeFile } = useFormBookFile()

  return (
    <TouchableOpacity style={[styles.buttonContainer]} onPress={onChangeFile}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 14,
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          {file?.name || message.toUpperCase()}
        </Text>
        {requered && <Text style={styles.topicRequered}>*</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default GetFileButton

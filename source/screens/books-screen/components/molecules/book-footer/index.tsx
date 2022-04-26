import React from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { GetterBooks } from '@/types'

import { useBooks } from '@/context/ContextBooks'
import { useScroll } from '@/context/ContextScroll'

import Tags from '../../atoms/tags'
import { textStyles, viewStyles } from '../../styles'

type Props = {
  item: GetterBooks
}

const BookFooter = ({ item }: Props) => {
  const { changeBook } = useBooks()
  const { scrollTop } = useScroll()

  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  const redirectBookID = () => {
    scrollTop()
    changeBook(item.pdf)
  }

  return (
    <View
      style={[
        viewStyles.viewFooter,
        {
          flexDirection: size.width < 1127 ? 'column' : 'row',
          justifyContent: size.width < 1127 ? 'center' : 'space-between',
          alignItems: size.width < 1127 ? 'center' : 'flex-start',
        },
      ]}
    >
      <View>
        <Text style={textStyles.authorFooter}>{item.autor}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Tags tags={item.tags} />
      </View>

      <View style={[viewStyles.viewButtons]}>
        <TouchableOpacity style={[viewStyles.viewButton]}>
          <Text style={[textStyles.buttonText]}>Ver mais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[viewStyles.viewButton]}
          onPress={redirectBookID}
        >
          <Text style={[textStyles.buttonText]}>Ler</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BookFooter

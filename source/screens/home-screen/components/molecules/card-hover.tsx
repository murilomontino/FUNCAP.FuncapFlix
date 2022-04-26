import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import ThumbnailTitle from '../atom/thumbnail-title'
import ThumbnailDescription from './thumbnail-description'
import ThumbnailImage from './thumbnail-image'

import colors from '@/global/colors'

type Props = {
  item: {
    id: number
    title: string
    thumbnail: string
    description: string
  }
  width: number
  height: number
  image: string
}

const CARD_HEIGHT = 320
const CARD_WIDTH = 280

const CardHover = ({ height, image, item, width }: Props) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          paddingHorizontal: 4,
          borderRadius: 10,
          backgroundColor: colors.castGrey,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 2,
          },
        },
      ]}
    >
      <View
        style={{
          flex: 1,
          height: '100%',
        }}
      >
        <ThumbnailImage
          height={height}
          width={width}
          image={image}
          hover={true}
          maxWidth={CARD_WIDTH}
          key={item.id}
        />

        <ThumbnailTitle hover={true} title={item.title} />
        <ThumbnailDescription description={item.description} />
      </View>
    </TouchableOpacity>
  )
}

export default CardHover

const styles = StyleSheet.create({})

import React, { useRef } from 'react'
import { useHover } from 'react-native-web-hooks'

import { MotiPressable } from '@motify/interactions'

import colors from '@/global/colors'

type Props = {
  index: number
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

const ThumbnailCard = ({ item, width, height, image, index }: Props) => {
  const ref = useRef(null)
  const hover = useHover(ref)

  const BORDER_RADIUS = 8
  const CARD_HEIGHT = height * 2
  const CARD_WIDTH = 300
  const TIME_ANIMATION = 100
  const DELAY = 0
  const SCALE = 0.95

  return (
    <MotiPressable
      ref={ref}
      key={index}
      animate={({ hovered, pressed }) => {
        return {
          scale: hovered ? 1.5 : 1,
          borderRadius: hovered ? BORDER_RADIUS : 0,
          borderLeftWidth: hovered ? 1 : 0,
          width: hovered || pressed ? CARD_WIDTH : width,
          height: hovered || pressed ? CARD_HEIGHT : height,
          borderRightWidth: hovered ? 1 : 0,
          borderBottomWidth: hovered ? 1 : 0,
          marginRight: 4,
          borderColor: colors.bluePerCent._70,
        }
      }}
      transition={{ type: 'timing' }}
      style={[
        {
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 2,
          },
          backgroundColor: colors.card_background,
          borderRadius: 8,
        },
      ]}
    ></MotiPressable>
  )
}

export default ThumbnailCard

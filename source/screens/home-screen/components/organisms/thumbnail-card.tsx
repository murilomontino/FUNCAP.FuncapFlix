import React, { useState } from 'react'
import { View } from 'react-native'

import { MotiView } from 'moti'
import { MotiPressable } from 'moti/interactions'

import DescriptionMovie from '../atom/description-movie'
import ButtonsCard from '../molecules/buttons-card'
import ThumbnailImage from '../molecules/thumbnail-image'

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
  const [hover, setHover] = useState(false)

  const BORDER_RADIUS = 4
  const CARD_HEIGHT = height * 2
  const CARD_WIDTH = 320
  const TIME_ANIMATION = 150
  const DELAY = 100
  const SCALE = 0.93
  const MARGIN_RIGHT = -16
  const BORDER_WIDTH = 2

  return (
    <MotiPressable
      key={index}
      animate={({ hovered, pressed }) => {
        setHover(hovered)
        return {
          scale: hovered ? 1 : SCALE,
          width: hovered ? CARD_WIDTH : width,
          height: hovered ? CARD_HEIGHT : height,
          marginRight: hovered ? -8 : MARGIN_RIGHT,
        }
      }}
      transition={{ type: 'timing', delay: DELAY, duration: TIME_ANIMATION }}
      style={[
        {
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 1,
          },
          backgroundColor: colors.card_background,
          borderRadius: 8,
        },
        hover && {
          borderWidth: BORDER_WIDTH,
          borderRadius: BORDER_RADIUS,
          borderColor: colors.button,
        },
      ]}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <ThumbnailImage
            height={height}
            width={width}
            title={item.title}
            image={image}
            hover={hover}
            maxWidth={CARD_WIDTH}
            borderRadius={BORDER_RADIUS}
            key={item.id}
          />
        </View>
        {hover && (
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'timing', duration: TIME_ANIMATION }}
            style={{ flex: 1 }}
          >
            <DescriptionMovie description={item.description} />
            <ButtonsCard />
          </MotiView>
        )}
      </View>
    </MotiPressable>
  )
}

export default ThumbnailCard

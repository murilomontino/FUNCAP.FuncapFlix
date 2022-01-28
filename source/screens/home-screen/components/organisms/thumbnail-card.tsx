import React, { useEffect, useRef } from 'react'
import { Animated, Easing, View } from 'react-native'
import { useHover } from 'react-native-web-hooks'

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
  const ref = useRef(null)
  const hover = useHover(ref)

  const BORDER_RADIUS = 8
  const CARD_HEIGHT = height * 2
  const CARD_WIDTH = 300
  const TIME_ANIMATION = 100
  const DELAY = 0
  const SCALE = 0.95

  useEffect(() => {
    if (hover) {
      setTimeout(() => {
        widthAnimation()
        animatedHeight()
      }, DELAY)
    } else {
      animationWidth.setValue(width)
      animationHeight.setValue(height)
    }
  }, [hover])

  const animationWidth = useRef(new Animated.Value(width)).current
  const animationHeight = useRef(new Animated.Value(height)).current
  const animationScale = useRef(new Animated.Value(SCALE)).current

  function animatedHeight() {
    Animated.timing(animationHeight, {
      toValue: CARD_HEIGHT,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
      duration: TIME_ANIMATION,
      delay: DELAY,
    }).start()
  }

  const widthAnimation = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(animationWidth, {
      toValue: CARD_WIDTH,
      useNativeDriver: false,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      duration: TIME_ANIMATION,
      delay: DELAY,
    }).start()
  }

  return (
    <Animated.View
      ref={ref}
      key={index}
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

        hover
          ? {
              width: CARD_WIDTH,
              height: animationHeight,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderColor: colors.bluePerCent._70,
              transform: [
                {
                  scale: animationScale.interpolate({
                    inputRange: [0, 1],
                    outputRange: [SCALE, 1],
                  }),
                },
              ],
            }
          : {
              width: width,
              height: animationHeight,
              transform: [
                {
                  scale: animationScale,
                },
              ],
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
        <View style={{ flex: 1 }}>
          {hover && <DescriptionMovie description={item.description} />}
          {hover && <ButtonsCard />}
        </View>
      </View>
    </Animated.View>
  )
}

export default ThumbnailCard

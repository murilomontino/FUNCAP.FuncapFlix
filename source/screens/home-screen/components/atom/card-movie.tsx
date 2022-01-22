import React, { useEffect, useRef, useState } from 'react'
import {
  Animated,
  Easing,
  LayoutRectangle,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useHover } from 'react-native-web-hooks'

import colors from '@/global/colors'

type Props = {
  index: number
  item: {
    id: number
    title: string
    thumbnail: string
    description: string
  }
  marginRight: number
  marginLeft: number
  width: number
  height: number
  image: string
  maxLength: number
  currentSlideWidth: number
  widthSlide: number
  posCurrent: number
}

const CARD_HEIGHT = 260
const CARD_WIDTH = 280
const TIME_ANIMATION = 150
const DELAY = 0

interface LayoutRectangleComplete extends LayoutRectangle {
  left?: number
  top?: number
}

const CardMovie = ({
  item,
  marginRight,
  width,
  height,
  image,
  index,
  marginLeft,
  maxLength,
  widthSlide,
  posCurrent,
}: Props) => {
  const ref = useRef(null)
  const hover = useHover(ref)

  const [margin, setMargin] = useState(0)
  const [lastPosition, setLastPosition] = useState(false)
  const [initPosition, setInitPosition] = useState(false)

  useEffect(() => {
    const lastCardThisSlider = (index + 1) % maxLength === 0 && index !== 0
    setLastPosition(lastCardThisSlider)
    const initCardThisSlider =
      index === 0 || index + 1 === maxLength * (posCurrent - 1) + 1
    setInitPosition(initCardThisSlider)
    if (index !== 0 && initCardThisSlider) {
      setMargin(marginRight + 12)
    } else {
      setMargin(marginRight + 12)
    }
  }, [hover])

  const animationWidth = useRef(new Animated.Value(width)).current
  const animationScale = useRef(new Animated.Value(1)).current
  const animationHeight = useRef(new Animated.Value(height)).current

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

  return (
    <TouchableOpacity
      style={[
        hover
          ? {
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              marginLeft: marginLeft,
              marginRight: initPosition ? margin : marginRight,
              borderRadius: 10,
            }
          : {
              height: height,
              margin: marginRight,
              width: width,
            },
      ]}
    >
      <Animated.View
        ref={ref}
        style={[
          hover
            ? {
                zIndex: 10,
                position: 'absolute',
                paddingHorizontal: 8,
                top: 40,
                left: 0,
                backgroundColor: colors.castGrey,
                width: CARD_WIDTH,
                height: animationHeight,
                elevation: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 1,
                  height: 2,
                },
                transform: [
                  {
                    scale: animationScale.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.1],
                    }),
                  },
                ],
                borderRadius: 10,
              }
            : {
                zIndex: 1,
                width: width,
                height: animationHeight,
                transform: [
                  {
                    scale: animationScale,
                  },
                ],
              },
          hover &&
            lastPosition && {
              left: -10,
            },
          hover &&
            initPosition && {
              left: 10,
              backgroundColor: 'red',
            },
        ]}
      >
        <View>
          <Animated.Image
            resizeMode="stretch"
            source={{ uri: image }}
            style={[
              hover
                ? {
                    marginTop: 20,
                    zIndex: 1,
                    height: height,
                    width: CARD_WIDTH,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }
                : {
                    zIndex: 5,
                    height: height,
                    width: width,
                  },
            ]}
          />
          <Text
            style={[
              !hover
                ? {
                    padding: 4,
                    fontVariant: ['small-caps'],
                    textShadowColor: '#000',
                    textShadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    position: 'absolute',
                    zIndex: 5,
                    fontSize: 16,
                    fontWeight: '700',
                    color: colors.white,
                    textAlign: 'center',
                    top: 20,
                  }
                : {
                    fontVariant: ['small-caps'],
                    color: colors.white,
                    position: 'relative',
                    textAlign: 'center',
                    fontWeight: '700',
                  },
            ]}
          >
            {item.title}
          </Text>
          {hover && (
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  padding: 4,
                  color: colors.white,
                  fontSize: 10,
                  textAlign: 'justify',
                  textTransform: 'capitalize',
                }}
              >
                {item.description.slice(0, 255).concat('...')}
              </Text>
            </View>
          )}
        </View>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default CardMovie

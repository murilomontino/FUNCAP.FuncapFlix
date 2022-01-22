import React from 'react'
import { ScrollView, Animated, SafeAreaView, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import CardContent from '../molecules/card-content'
import cards from '../molecules/home_slide.json'

import constants from '@/global/constants'

const OFFSET = 0

export default function CardCarousel() {
  const scrollX = React.useRef(new Animated.Value(0)).current
  const web = Platform.OS === 'web'

  const { window, screen } = useDimensions()
  const size = web ? window : screen
  const { height, width } = size
  const ITEM_WIDTH = width - OFFSET * 2

  const refScroll = React.useRef<ScrollView | undefined>()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        paddingVertical: 0,
      }}
    >
      <ScrollView
        horizontal={true}
        decelerationRate={'normal'}
        snapToInterval={ITEM_WIDTH}
        style={{
          paddingHorizontal: 0,
        }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        bounces={false}
        ref={refScroll}
        disableIntervalMomentum
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={12}
      >
        {cards.items.map((item, idx) => {
          const inputRange = [
            (idx - 1) * ITEM_WIDTH,
            idx * ITEM_WIDTH,
            (idx + 1) * ITEM_WIDTH,
          ]

          const translate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          })

          return (
            <Animated.View
              style={{
                width: ITEM_WIDTH,
                height: height,
                opacity: opacity,
                transform: [{ scale: translate }],
                marginBottom: constants.footerHight,
                marginLeft: idx === 0 ? OFFSET : undefined,
                marginRight:
                  idx === cards.items.length - 1 ? OFFSET : undefined,
              }}
              key={idx}
            >
              <CardContent
                offset={ITEM_WIDTH * idx}
                item_width={ITEM_WIDTH}
                item={item}
                index={idx}
                refScroll={refScroll}
                length={cards.items.length}
                height={height}
              />
            </Animated.View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

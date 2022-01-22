import React from 'react'
import { Platform, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import SlideContent from './components/molecules/slider-content'
import CardCarousel from './components/organisms/card-carousel'

const HomeScreen = () => {
  const web = Platform.OS === 'web'

  const { window, screen } = useDimensions()
  const size = web ? window : screen
  const { height, width } = size

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          minHeight: height,
          minWidth: width,
          marginBottom: -100,
        }}
      >
        <CardCarousel />
      </View>
      <SlideContent />
      <SlideContent />
    </View>
  )
}

export default HomeScreen

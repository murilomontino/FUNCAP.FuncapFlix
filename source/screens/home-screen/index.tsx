import React from 'react'
import { Platform, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import CardCarousel from './components/templates/card-carousel'
import SlideContent from './components/templates/slider-content'

const SLIDE_HEIGHT = 300

const HomeScreen = () => {
  const web = Platform.OS === 'web'

  const { window, screen } = useDimensions()
  const size = web ? window : screen
  const { height, width } = size

  const dataArray = [0, 1]

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          minHeight: height,
          minWidth: width,
          marginBottom: -160,
          zIndex: -1,
        }}
      >
        <CardCarousel />
      </View>

      <View
        style={{
          flex: 1,
          minHeight: dataArray.length * SLIDE_HEIGHT,
          maxWidth: width,
          backgroundColor: 'blue',
        }}
      >
        {dataArray.map((item, idx) => {
          return (
            <View key={idx}>
              <SlideContent />
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default HomeScreen

import React, { useState } from 'react'
import { Platform, ImageBackground, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import home from './home_slide.json'

const HomeScreen = () => {
  const web = Platform.OS === 'web'

  const { window, screen } = useDimensions()
  const size = web ? window : screen
  const { height, width } = size

  const [items, setItems] = useState(home.items)

  return (
    <ImageBackground
      source={items[0].snippet.thumbnails.maxres?.url}
      resizeMode="cover"
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          width: width,
          height: height,
        },
      ]}
    >
      <View
        style={{
          width: width,
          height: height,
        }}
      ></View>
    </ImageBackground>
  )
}

export default HomeScreen

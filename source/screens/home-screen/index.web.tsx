import React from 'react'
import { Platform, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import CardCarousel from './components/templates/card-carousel'
import SlideContent from './components/templates/slider-content'

import constants from '@/global/constants'

const SLIDE_HEIGHT = 300

const HomeScreen = () => {
  const web = Platform.OS === 'web'

  const { window, screen } = useDimensions()
  const size = web ? window : screen
  const { height, width } = size

  const dataArray = [
    {
      id: 1,
      title: 'Documentários',
    },
    {
      id: 2,
      title: 'Filmes',
    },
  ]

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <CardCarousel />

      <View
        style={{
          height: height,
          maxWidth: width,
          marginTop: -320,
          marginBottom: constants.footerHight,
        }}
      >
        <View
          style={{
            zIndex: 999,
          }}
        >
          <SlideContent title="Em Alta" />
        </View>
        {dataArray.map((item, idx) => {
          return (
            <View
              key={item.id}
              style={{
                zIndex: 998 - idx,
                marginTop: -74,
                marginBottom: -16,
              }}
            >
              <SlideContent title={item.title} />)
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default HomeScreen

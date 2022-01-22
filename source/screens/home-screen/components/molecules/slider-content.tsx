import React, { useMemo, useRef, useState } from 'react'
import { FlatList, Platform, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDimensions } from 'react-native-web-hooks'

import CardMovie from '../atom/card-movie'
import home from './home_slide.json'

import globalStyles from '@/global/globalStyles'

import { ThumbnailsMax } from '@/utils/thumbnail-max'

const WIDTH_ITEM = 240
const MARGIN_RIGHT = 8
const MARGIN_LEFT = 4

const SlideContent = () => {
  const web = Platform.OS === 'web'

  const { window, screen } = useDimensions()
  const size = web ? window : screen
  const { width: widthWin } = size

  const dataArray = home.items

  const [current, setCurrent] = useState(0)
  const [posCurrent, setPosCorrent] = useState(1)

  const refFlatList = useRef<FlatList<any> | undefined>()

  const MAX_WIDTH_CONTENT = useMemo(
    () => dataArray.length * WIDTH_ITEM + dataArray.length * MARGIN_RIGHT,
    [dataArray]
  )

  const length = Math.floor(widthWin / WIDTH_ITEM)

  const scrollToOffset = (offset: number) => {
    if (refFlatList.current) {
      refFlatList.current.scrollToOffset({
        animated: true,
        offset,
      })
    }
  }

  const nextPage = () => {
    const next = current + WIDTH_ITEM * length

    if (next < MAX_WIDTH_CONTENT) {
      scrollToOffset(next)
      setCurrent(next)
      setPosCorrent(posCurrent + 1)
    } else {
      scrollToOffset(MAX_WIDTH_CONTENT)
      setCurrent(MAX_WIDTH_CONTENT)
      setPosCorrent(length)
    }
  }

  const previousPage = () => {
    const previous = current - WIDTH_ITEM * length

    if (previous > 0) {
      scrollToOffset(previous)
      setCurrent(previous)
      setPosCorrent(posCurrent - 1)
    } else {
      scrollToOffset(0)
      setCurrent(0)
      setPosCorrent(1)
    }
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text style={[globalStyles.heading]}>Previews</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: 0,
          padding: 4,
        }}
      >
        <TouchableHighlight
          onPress={previousPage}
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            marginTop: 10,
            left: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            height: 140,
          }}
        >
          <FontAwesome name="chevron-left" size={24} color="white" />
        </TouchableHighlight>
        <FlatList
          contentContainerStyle={[
            globalStyles.pHHalf,
            {
              height: 160,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
          data={dataArray}
          pagingEnabled={true}
          horizontal
          ref={refFlatList}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item, index }) => {
            return (
              <CardMovie
                maxLength={length}
                index={index}
                item={item.snippet}
                marginRight={MARGIN_RIGHT}
                widthSlide={widthWin}
                currentSlideWidth={current}
                posCurrent={posCurrent}
                marginLeft={MARGIN_LEFT}
                width={WIDTH_ITEM}
                height={140}
                image={ThumbnailsMax(item.snippet.thumbnails)}
              />
            )
          }}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ height: 240 }}>
          <TouchableHighlight
            onPress={nextPage}
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              right: 0,
              marginTop: 10,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              height: 140,
            }}
          >
            <FontAwesome name="chevron-right" size={24} color="white" />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

export default SlideContent

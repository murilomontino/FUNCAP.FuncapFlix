import React, { useMemo, useRef, useState } from 'react'
import { FlatList, Platform, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDimensions } from 'react-native-web-hooks'

import TitleSlider from '../atom/title-slider'
import ThumbnailCard from '../organisms/thumbnail-card-reanimated'
import home from './home_slide.json'

import globalStyles from '@/global/globalStyles'

import { ThumbnailsMax } from '@/utils/thumbnail-max'

const WIDTH_ITEM = 300
const HEIGHT_ITEM = 160
const MARGIN_RIGHT = 12
const MARGIN_LEFT = 4

type Props = {
  title: string
}

const SlideContent = ({ title }: Props) => {
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
        flexDirection: 'column',
        paddingHorizontal: 0,
        height: HEIGHT_ITEM * 2,
      }}
    >
      <View
        style={{
          maxHeight: 40,
          marginBottom: -70,
          zIndex: -999,
          width: widthWin - 80,
          marginHorizontal: 40,
        }}
      >
        <TitleSlider title={title} />
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            height: HEIGHT_ITEM * 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableHighlight
            onPress={previousPage}
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              left: 0,
              alignItems: 'center',
              justifyContent: 'center',
              height: HEIGHT_ITEM,
            }}
          >
            <FontAwesome name="chevron-left" size={24} color="white" />
          </TouchableHighlight>
        </View>

        <FlatList
          contentContainerStyle={[
            globalStyles.pHHalf,
            {
              zIndex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: HEIGHT_ITEM * 2,
            },
          ]}
          data={dataArray}
          pagingEnabled={true}
          horizontal
          ref={refFlatList}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item, index }) => {
            return (
              <ThumbnailCard
                image={ThumbnailsMax(item.snippet.thumbnails)}
                index={index}
                item={item.snippet}
                width={WIDTH_ITEM}
                height={HEIGHT_ITEM}
              />
            )
          }}
          showsHorizontalScrollIndicator={false}
        />

        <View
          style={{
            height: HEIGHT_ITEM * 2,
            width: 20,
          }}
        >
          <TouchableHighlight
            onPress={nextPage}
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              top: HEIGHT_ITEM / 2,
              right: 0,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              height: HEIGHT_ITEM,
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

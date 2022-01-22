import React from 'react'
import { ImageBackground, ScrollView } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import FormMoveButtons from '../atom/form-move-buttons'
import ContentSlide from './content'

import { ThumbnailsMax } from '@/utils/thumbnail-max'

type Props = {
  item: any
  item_width: number
  index: number
  refScroll: React.MutableRefObject<ScrollView | undefined>
  length: number
  height: number
  offset: number
}

const CardContent = ({
  item,
  item_width,
  index,
  refScroll,
  length,
  height,
  offset,
}: Props) => {
  return (
    <ImageBackground
      source={{
        uri: ThumbnailsMax(item.snippet.thumbnails),
      }}
      resizeMode="cover"
      style={{
        width: item_width,
        height: height,
        flex: 1,
        justifyContent: 'center',
      }}
      imageStyle={{
        borderRadius: 6,
      }}
    >
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={['rgba(0,0,0,0.5)', 'transparent']}
        style={{
          flex: 1,
          width: item_width,
          height: height,
        }}
      >
        <ContentSlide />
      </LinearGradient>
      <FormMoveButtons
        offset={offset}
        abas={length}
        current={index}
        condition={true}
        refScroll={refScroll}
      />
    </ImageBackground>
  )
}

export default CardContent

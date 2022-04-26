import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import Logo from '@/components/atom/logo-funcap'

import colors from '@/global/colors'

type Props = {
  image: string
  width: number
  height: number
  hover: boolean
  maxWidth: number
  maxHeight?: number
  borderRadius?: number
  title: string
}

const ThumbnailImage = ({
  height,
  hover,
  image,
  maxHeight,
  maxWidth,
  title,
  width,
  borderRadius,
}: Props) => {
  const heightHover = (maxHeight ?? height) - 8
  const widthHover = maxWidth - 8

  return (
    <ImageBackground
      source={{ uri: image }}
      resizeMode="stretch"
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        },
        hover
          ? {
              height: heightHover,
              width: widthHover,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }
          : {
              borderRadius: borderRadius ?? 0,
              height: height,
              width: width,
            },
      ]}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          padding: 8,
        }}
      >
        <Logo size={hover ? 2 : 1} />
      </View>
      <Text
        style={[
          {
            color: colors.white,
            width: '100%',
            fontFamily: 'AlfaSlabOne_400Regular',
            textShadowColor: colors.black,
            backgroundColor: hover
              ? colors.blackPerCent._30
              : colors.blackPerCent._50,
            textShadowOffset: {
              width: 1,
              height: 1,
            },
            zIndex: 5,
            fontSize: hover ? 14 : 10,
            textAlign: 'center',
            padding: 8,
          },
        ]}
      >
        {title.toUpperCase()}
      </Text>
    </ImageBackground>
  )
}

export default ThumbnailImage

const styles = StyleSheet.create({})

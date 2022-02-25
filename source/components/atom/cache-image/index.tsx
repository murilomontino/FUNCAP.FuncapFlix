import React, { useEffect, useState } from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'

import api from '@/services'

import NotCapa from '@/assets/no-capa.jpg'

import { getCache, setCache } from '@/utils/CacheStorageLocal'

type Props = {
  capa?: string
  height?: number | string
  width?: number | string
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
  imageStyle?: StyleProp<ImageStyle>
  uri?: string
}

const CacheImage = ({
  capa,
  uri,
  height = 200,
  width = 150,
  resizeMode = 'contain',
  imageStyle,
}: Props) => {
  const [img, setImg] = useState('')

  useEffect(() => {
    if (uri) {
      setImg(uri)
      return
    }

    // Se a capa for uma url, seta a imagem como a capa
    if (capa && capa.includes('http')) {
      setImg(capa)
      return
    }

    if (capa) {
      getImgStorage(capa)
    }
  }, [uri, capa])

  const getImgStorage = async (capa: string) => {
    const arrayCapa = capa.split('.')
    const tipo = arrayCapa[arrayCapa.length - 1]

    const cache = await getCache(arrayCapa[0])

    if (!cache) {
      const { data } = await api.get(`image/${capa}`)

      setCache(arrayCapa[0], {
        data: data,
      })
      setImg(`data:image/${tipo};base64,`.concat(data))
    } else {
      setImg(`data:image/${tipo};base64,`.concat(cache.data as string))
    }
  }

  return (
    <Image
      style={[
        {
          width,
          resizeMode,
          height,
        },
        imageStyle,
      ]}
      defaultSource={NotCapa}
      source={{
        uri: img,
      }}
    />
  )
}

export default CacheImage

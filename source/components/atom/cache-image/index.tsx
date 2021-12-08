import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'

import api from '@/services'

import NotCapa from '@/assets/no-capa.jpg'

import { getCache, setCache } from '@/utils/CacheStorageLocal'

type Props = {
  capa?: string
  height?: number
  width?: number
}

const CacheImage = ({ capa, height = 200, width = 150 }: Props) => {
  const [img, setImg] = useState('')

  useEffect(() => {
    if (capa) {
      getImgStorage(capa)
    }
  }, [])

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
      style={{
        width,
        resizeMode: 'contain',
        height,
      }}
      defaultSource={NotCapa}
      source={{
        uri: img,
      }}
    />
  )
}

export default CacheImage

import React, { useEffect, useMemo, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { Albuns } from '@/types/generic/albuns'

import api from '@/services'

import CardAlbum from './organims/card-album'

import constants from '@/global/constants'

const MusicScreen = () => {
  const perPage = useMemo(() => constants.perPage, [])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const [albums, setAlbums] = useState<Albuns[]>([])

  const data = useMemo(() => {
    const pos = (page - 1) * perPage
    return albums.slice(pos, pos + perPage)
  }, [page, albums])

  const onLoad = async () => {
    const { data } = await api.get<Albuns[]>('/musicas/album')

    setAlbums(data)
  }

  useEffect(() => {
    ;(async () => {
      await onLoad()
    })()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          flexDirection: 'row',
          width: '100%',
          flexWrap: 'wrap',
        }}
        data={data}
        renderItem={({ item }) => <CardAlbum album={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default MusicScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginTop: constants.headerHight,
    marginBottom: constants.footerHight,
    backgroundColor: 'transparent',
    flexWrap: 'wrap',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useQuery } from 'react-query'

import { GettersAlbums } from '@/types/products'

import api from '@/services'
import { Getter } from '@/services/config/types'

import CardAlbum from './organism/card-album'

import constants from '@/global/constants'

const MusicScreen = (props: any) => {
  const { data: albums } = useQuery<GettersAlbums[]>('albums', async () => {
    const { data } = await api.get<Getter<GettersAlbums[]>>('/musicas/album')

    if (data.statusCode === 200) {
      return data.data
    }

    return []
  })

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          flexDirection: 'row',
          width: '100%',
          flexWrap: 'wrap',
        }}
        data={albums}
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

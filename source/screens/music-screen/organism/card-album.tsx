import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { GettersAlbums } from '@/types/products'

import CacheImage from '@/components/atom/cache-image'

import CardTrack from './card-track'

import colors from '@/global/colors'

interface Props {
  album: GettersAlbums
}

const CardAlbum = ({ album }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        height: 320,
        maxWidth: 480,
        backgroundColor: colors.card_background,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.button,
        elevation: 10,
        padding: 12,
        shadowColor: '#000',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        margin: 10,
      }}
    >
      <CacheImage
        capa={album.image}
        height={120}
        width={120}
        resizeMode="stretch"
        imageStyle={{
          borderWidth: 1,
          borderColor: colors.white,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
          color: colors.white30,
        }}
      >
        {album.nome}
      </Text>
      <View
        style={{
          flex: 1,
          width: '100%',
        }}
      >
        <FlatList
          data={album.tracks}
          renderItem={({ item }) => (
            <CardTrack albumNomeUnico={album.nome_unico} track={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  )
}

export default CardAlbum

const styles = StyleSheet.create({})

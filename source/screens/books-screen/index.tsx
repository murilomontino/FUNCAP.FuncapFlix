import React, { useEffect, useState } from 'react'
import { FlatList, Platform, StyleSheet, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { AttrsProducts } from '@/types/Products'

import BooksProvider from '@/components/context/ContextBooks'
import PdfViewer from '@/components/organism/PDF-viewer'

import api from '@/services'

import CardBooks from './components/organims/card-book'
import PaginationsBooks from './components/organims/pagination-books'

import constants from '@/global/constants'

const BooksScreen = () => {
  const [products, setProducts] = useState<AttrsProducts[]>([])

  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get('get-all-books')

      setProducts(data)
    })()
  }, [])

  return (
    <BooksProvider>
      <View style={styles.container}>
        <View
          style={{
            width: size.width,
          }}
        >
          <PdfViewer />
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <FlatList
            style={{ marginBottom: 40, minHeight: 300 * products.length ?? 1 }}
            data={products}
            renderItem={({ item }) => {
              return <CardBooks item={item} />
            }}
            ListFooterComponent={() => <PaginationsBooks />}
            keyExtractor={(item) => item.nome_arquivo}
          />
        </View>
      </View>
    </BooksProvider>
  )
}

export default BooksScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: constants.headerHight,
    marginBottom: constants.footerHight,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

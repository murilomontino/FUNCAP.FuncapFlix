import React, { useEffect, useState } from 'react'
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { BooksGet } from '@/types/generic/books'

import BooksProvider from '@/components/context/ContextBooks'
import PdfViewer from '@/components/organism/PDF-viewer'

import api from '@/services'

import CardBooks from './components/organims/card-book'
import PaginationsBooks from './components/organims/pagination-books'

import colors from '@/global/colors'
import constants from '@/global/constants'

const BooksScreen = () => {
  const [books, setBooks] = useState<BooksGet[]>([])

  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get<BooksGet[]>('books')
      console.log(data)
      setBooks(data ?? [])
    })()

    return () => {
      setBooks([])
    }
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

        <FlatList
          style={{ marginBottom: 40, minHeight: 300 * books.length ?? 1 }}
          contentContainerStyle={{
            width: size.width,
          }}
          data={books}
          ListEmptyComponent={() => (
            <View
              style={[
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  flexDirection: 'row',
                  padding: 12,
                  marginHorizontal: 20,
                  marginVertical: 8,
                  backgroundColor: colors.castGrey,
                  elevation: 5,
                  shadowColor: '#fff',
                  shadowOffset: {
                    width: 1,
                    height: 2,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 4,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: colors.whitePerCent._80,
                }}
              >
                Não há livros cadastrados
              </Text>
            </View>
          )}
          renderItem={({ item }) => {
            return <CardBooks item={item} />
          }}
          keyExtractor={(item, index) => `${item.id}`}
          ListFooterComponent={() => <PaginationsBooks />}
        />
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

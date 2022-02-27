import React from 'react'
import { Platform, StyleSheet, View, Text, FlatList } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'
import { useQuery } from 'react-query'

import { GetterBooks } from '@/types/products'

import BooksProvider from '@/context/ContextBooks'

import PdfViewer from '@/components/organism/PDF-viewer'

import api from '@/services'
import { Getter } from '@/services/config/types'

import CardBooks from './components/organism/card-book'
import PaginationBooks from './components/organism/pagination-books'

import colors from '@/global/colors'
import constants from '@/global/constants'

const BooksScreen = (params: any) => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  const { data: books } = useQuery<GetterBooks[]>(
    'books',
    async () => {
      const { data } = await api.get<Getter<GetterBooks[]>>('books')
      if (data.statusCode === 200) {
        return data.data
      }
      return []
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
    }
  )

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
          style={{ marginBottom: 40, minHeight: 300 }}
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
          ListFooterComponent={() => <PaginationBooks />}
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

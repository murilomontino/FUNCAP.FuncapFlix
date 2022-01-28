import React from 'react'
import { View, Dimensions } from 'react-native'

import { Platform } from 'expo-modules-core'

import DrawerProvider from '@/context/DrawerMenu'

import ScrollProvider from '@/components/context/ContextScroll'
import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

import constants from '@/global/constants'

const Front: React.FC = ({ children }) => {
  const web = Platform.OS === 'web'
  const { height } = Dimensions.get(web ? 'window' : 'screen')
  const minHeight = height - constants.footerHight

  return (
    <DrawerProvider>
      <Header />

      <ScrollProvider>
        <View
          style={{
            flex: 1,
            minHeight: minHeight,
            marginBottom: constants.footerHight,
          }}
        >
          {children}
        </View>
        <Footer />
      </ScrollProvider>
    </DrawerProvider>
  )
}

export default Front

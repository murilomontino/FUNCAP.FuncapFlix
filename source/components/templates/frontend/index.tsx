import React from 'react'
import { View } from 'react-native'

import THEME from '@/theme'
import { ThemeProvider } from 'styled-components'

import ScrollProvider from '@/context/ContextScroll'
import DrawerProvider from '@/context/DrawerMenu'

import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

import colors from '@/global/colors'
import constants from '@/global/constants'
import { useSize } from '@/hooks/use-size'

const Front: React.FC = ({ children }) => {
  const {
    size: { height },
  } = useSize()

  return (
    <DrawerProvider>
      <Header />

      <ScrollProvider>
        <View
          style={{
            flex: 1,
            minHeight: height,
            marginBottom: constants.footerHight,
            backgroundColor: colors.background,
          }}
        >
          <ThemeProvider theme={THEME}>{children}</ThemeProvider>
        </View>
        <Footer />
      </ScrollProvider>
    </DrawerProvider>
  )
}

export default Front

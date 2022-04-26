import React from 'react'

import ScrollProvider from '@/context/ContextScroll'
import DrawerProvider from '@/context/DrawerMenu'

import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

import { Container } from './styles'

import { useSize } from '@/hooks/use-size'

const Front: React.FC = ({ children }) => {
  const {
    size: { height },
  } = useSize()

  return (
    <DrawerProvider>
      <Header />

      <ScrollProvider>
        <Container
          style={{
            minHeight: height,
          }}
        >
          {children}
        </Container>
        <Footer />
      </ScrollProvider>
    </DrawerProvider>
  )
}

export default Front

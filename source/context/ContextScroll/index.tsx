import React, { MutableRefObject, useRef } from 'react'
import { ScrollView } from 'react-native'

import { createContext, useContextSelector } from 'use-context-selector'

type SelectBooks = {
  refScroll: MutableRefObject<ScrollView | undefined>
  scrollTop: (y?: number) => void
}

const ContextScroll = createContext({} as SelectBooks)

const ScrollProvider: React.FC = ({ children }) => {
  const refScroll = useRef<ScrollView>()

  async function scrollTop(y = 0) {
    refScroll.current?.scrollTo({
      y: y,
      animated: true,
    })
  }

  return (
    <ScrollView
      ref={refScroll}
      scrollEventThrottle={16}
      style={{
        backgroundColor: '#141414',
      }}
    >
      <ContextScroll.Provider value={{ refScroll, scrollTop }}>
        {children}
      </ContextScroll.Provider>
    </ScrollView>
  )
}

export default ScrollProvider

export const useScroll = () => {
  const refScroll = useContextSelector(
    ContextScroll,
    (state) => state.refScroll
  )
  const scrollTop = useContextSelector(
    ContextScroll,
    (state) => state.scrollTop
  )

  return {
    refScroll,
    scrollTop,
  }
}

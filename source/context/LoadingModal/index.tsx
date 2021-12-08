import React, { createContext, useContext, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Modal, Portal } from 'react-native-paper'

import styles from '@/global/styles'

type Context = {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadingContext = createContext<Context>({
  loading: false,
  setLoading: () => {
    return
  },
})

const LoadingContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const LoadingModal = () => {
    return (
      <Portal>
        <Modal visible={loading}>
          <View style={styles.containerCentered}>
            <ActivityIndicator color={'blue'} size={'large'} />
          </View>
        </Modal>
      </Portal>
    )
  }
  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
      <LoadingModal />
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider

export const useLoading = (): Context => {
  return useContext(LoadingContext)
}

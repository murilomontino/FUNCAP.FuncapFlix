import React, { createContext, useContext, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Modal, Portal } from 'react-native-paper'

import styles from '@/global/styles'

type Context = {
  loading: boolean
  showLoading: () => void
  hideLoading: () => void
}

const LoadingContext = createContext<Context>({} as Context)

const LoadingContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const showLoading = () => setLoading(true)
  const hideLoading = () => setLoading(false)

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
        showLoading,
        hideLoading,
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

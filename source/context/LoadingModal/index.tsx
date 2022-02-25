import React, { createContext, useContext, useState } from 'react'
import { View, ActivityIndicator, Modal } from 'react-native'

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
      <Modal visible={loading} transparent>
        <View style={styles.containerCentered}>
          <ActivityIndicator color={'blue'} size={'large'} />
        </View>
      </Modal>
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

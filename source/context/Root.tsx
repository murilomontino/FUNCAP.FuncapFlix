import React from 'react'

import LoadingContextProvider from './LoadingModal'
import ToastContextProvider from './ToastModal'

const RootContext: React.FC = ({ children }) => {
  return (
    <LoadingContextProvider>
      <ToastContextProvider>{children}</ToastContextProvider>
    </LoadingContextProvider>
  )
}

export default RootContext

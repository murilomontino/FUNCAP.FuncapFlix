import React, { createContext, useContext, useState } from 'react'
import { View } from 'react-native'

type Context = {
  reset: () => void
}

const ResetContext = createContext<Context>({} as Context)

const ResetContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const reset = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }

  if (loading) {
    return <View />
  }

  return (
    <ResetContext.Provider
      value={{
        reset,
      }}
    >
      {children}
    </ResetContext.Provider>
  )
}

export default ResetContextProvider

export const useReset = (): Context => {
  return useContext(ResetContext)
}

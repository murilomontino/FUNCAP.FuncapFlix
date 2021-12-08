import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'

import * as ScreenOrientation from 'expo-screen-orientation'

import { PersistGate } from 'redux-persist/integration/react'

import { persistedStore, store } from '@/redux'

import RootContext from '@/context/Root'

import Navigation from '@/navigations/index'

enableScreens()

export default function App() {
  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        await ScreenOrientation.lockPlatformAsync({
          screenOrientationConstantAndroid:
            ScreenOrientation.Orientation.PORTRAIT_UP,
          screenOrientationArrayIOS: [
            ScreenOrientation.Orientation.PORTRAIT_UP,
          ],
          screenOrientationLockWeb:
            ScreenOrientation.WebOrientationLock.LANDSCAPE,
        })
      }
    })()
  })

  return (
    <PaperProvider>
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          <RootContext style={{ flex: 1 }}>
            <Navigation />
          </RootContext>
        </PersistGate>
      </Provider>
    </PaperProvider>
  )
}

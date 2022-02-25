import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import AppLoading from 'expo-app-loading'
import * as ScreenOrientation from 'expo-screen-orientation'

import { PersistGate } from 'redux-persist/integration/react'

import { AlfaSlabOne_400Regular } from '@expo-google-fonts/alfa-slab-one'
import {
  useFonts,
  Inter_900Black,
  Inter_800ExtraBold,
  Inter_500Medium,
} from '@expo-google-fonts/inter'

import { persistedStore, store } from '@/redux'

import RootContext from '@/context/Root'

import Navigation from '@/navigations/index'

enableScreens()

export default function App() {
  const queryClient = new QueryClient()

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

  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_800ExtraBold,
    Inter_500Medium,
    AlfaSlabOne_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          <RootContext>
            <Navigation />
          </RootContext>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}

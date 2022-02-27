/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react'
import { Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BooksPage from '@/screens/books-screen'
import HomeScreen from '@/screens/home-screen'
import MusicScreen from '@/screens/music-screen'
import QRCodeScreen from '@/screens/qr-code-screen'

import { linking, RootStackParamList } from '../config'
import { TemplateFront } from '../template/navigation-frontend-template'
import { AddProductStack } from './stacks/add-products-stack'

const Stack = createStackNavigator<RootStackParamList>()

const Navigation: React.FC = () => {
  return (
    <NavigationContainer
      linking={linking}
      documentTitle={{
        formatter: (options, route) =>
          `Mapa Cultural de Sergipe - ${options?.title ?? route?.name}`,
      }}
      fallback={<Text>Loading...</Text>}
    >
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home">
          {({ ...rest }) =>
            TemplateFront({ children: <HomeScreen {...rest} /> })
          }
        </Stack.Screen>
        <Stack.Screen name="Literatura">
          {({ ...rest }) =>
            TemplateFront({ children: <BooksPage {...rest} /> })
          }
        </Stack.Screen>
        <Stack.Screen name="QRCode">
          {({ ...rest }) =>
            TemplateFront({ children: <QRCodeScreen {...rest} /> })
          }
        </Stack.Screen>
        <Stack.Screen name="AddProducts">
          {({ ...rest }) => <AddProductStack {...rest} />}
        </Stack.Screen>
        <Stack.Screen name="Music">
          {({ ...rest }) =>
            TemplateFront({ children: <MusicScreen {...rest} /> })
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation

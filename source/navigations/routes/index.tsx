/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react'
import { Text } from 'react-native'

import { NavigationContainer, Theme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AddBook from 'modules/Books/AddBook'
import Home from 'screens/Home'
import LiteraturaPage from 'screens/Literature'
import QRCodeScreen from 'screens/QRCode'

import Front from 'components/templates/frontend'

import { linking, RootStackParamList } from '../config'

const Stack = createStackNavigator<RootStackParamList>()

const themeDefault: Theme = {
  dark: true,
  colors: {
    background: 'transparent',
    notification: '#fff',
    border: '#000',
    text: '#000',
    card: '#fff',
    primary: '#666666',
  },
}

const Navigation: React.FC = () => {
  const TemplateFront: React.FC = ({ children }) => {
    return <Front>{children}</Front>
  }

  return (
    <NavigationContainer
      theme={themeDefault}
      linking={linking}
      fallback={<Text>Loading...</Text>}
    >
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      >
        <Stack.Screen
          component={({ ...rest }) =>
            TemplateFront({ children: <Home {...rest} /> })
          }
          name="Home"
        />
        <Stack.Screen
          component={({ ...rest }) =>
            TemplateFront({ children: <LiteraturaPage {...rest} /> })
          }
          name="Literatura"
        />
        <Stack.Screen
          component={({ ...rest }) =>
            TemplateFront({ children: <QRCodeScreen {...rest} /> })
          }
          name="QRCode"
        />
        <Stack.Screen
          component={({ ...rest }) =>
            TemplateFront({ children: <AddBook {...rest} /> })
          }
          name="AddBooks"
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation

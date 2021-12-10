import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import AddBook from '@/modules/Books/add-book'

import { TemplateFront } from '@/navigations/template/navigation-frontend-template'

import MusicScreen from '@/screens/music-screen'

const Stack = createStackNavigator()

export const AddProductStack = ({ ...rest }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddBooks"
        component={() => TemplateFront({ children: <AddBook {...rest} /> })}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AddMusic"
        component={() => TemplateFront({ children: <MusicScreen {...rest} /> })}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import ModuleAddBook from '@/modules/products/add-book'
import ModuleAddExhibition from '@/modules/products/add-exhibition'
import ModuleAddMusic from '@/modules/products/add-music'

const Stack = createStackNavigator()

export const AddProductStack = ({ ...rest }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddBooks"
        component={ModuleAddBook}
        options={{
          headerShown: false,
          title: 'Adicionar Livro',
        }}
      />

      <Stack.Screen
        name="AddMusic"
        component={ModuleAddMusic}
        options={{
          headerShown: false,
          title: 'Adicionar Música',
        }}
      />
      <Stack.Screen
        name="AddExhibition"
        component={ModuleAddExhibition}
        options={{
          headerShown: false,
          title: 'Adicionar Exposições',
        }}
      />
    </Stack.Navigator>
  )
}
